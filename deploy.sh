#!/usr/bin/env bash
# ======================================================================
#  DEPLOY hungthai_portfolio → Proxmox LXC (hungthai, ID=104)
#
#  Tự động: build --> tar out/ --> scp lên node --> pct push vào CT -->
#  giải nén + chown --> xác minh HTTP --> dọn file tạm.
#
#  Cách dùng:       ./deploy.sh
#  Hoặc gộp cả CV:  ./update-cv.sh && ./deploy.sh
# ======================================================================
set -euo pipefail
cd "$(dirname "$0")"

# ---------- Config (đổi nếu cần) ----------
VMID="104"                 # container ID
NODE_IP="10.23.1.50"       # Proxmox host (node pve)
CT_SRV="/var/www/hungthai" # thư mục nginx phục vụ trong container
CT_IP="10.23.1.104"        # IP của container (để xác minh HTTP)
SSH_KEY="$HOME/.ssh/id_ed25519"
TAR="/tmp/site.tar.gz"
SSH_OPTS="-o StrictHostKeyChecking=no -o PasswordAuthentication=no -i $SSH_KEY"

echo "==> B0: Build site (npm run build) ..."
npm run build

echo "==> B1: Đóng gói out/ ..."
rm -f "$TAR"
tar -C out -czf "$TAR" .
ls -la "$TAR"

echo "==> B2: scp lên node $NODE_IP ..."
scp $SSH_OPTS "$TAR" "root@$NODE_IP:/tmp/site.tar.gz"

echo "==> B3: pct push vào container $VMID ..."
ssh $SSH_OPTS "root@$NODE_IP" "pct push $VMID /tmp/site.tar.gz /var/tmp/site.tar.gz"

echo "==> B4: Giải nén + chown trong container ..."
INNER="cd $CT_SRV && find . -mindepth 1 -maxdepth 1 -exec rm -rf {} + && tar -xzf /var/tmp/site.tar.gz && chown -R www-data:www-data $CT_SRV && rm -f /var/tmp/site.tar.gz"
B64="$(printf '%s' "$INNER" | base64 -w0)"
ssh $SSH_OPTS "root@$NODE_IP" "echo '$B64' | base64 -d | pct exec $VMID -- bash -s"

echo "==> B5: Xác minh HTTP (qua nginx container) ..."
ssh $SSH_OPTS "root@$NODE_IP" \
 "curl -s -o /dev/null -w 'index    -> HTTP=%{http_code}\n' http://$CT_IP/ ; \
   curl -s -o /dev/null -w 'cv.html  -> HTTP=%{http_code}\n' http://$CT_IP/cv.html"

rm -f "$TAR"
echo "==> Xong! Đã deploy. Lưu ý: Cloudflare tunnel có thể cache vài phút."
