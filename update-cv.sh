#!/usr/bin/env bash
# ============================================================
#  UPDATE CV — 1 lệnh duy nhất
#  Nguồn duy nhất: public/cv.html
#   1) Xuất PDF    -> docs/Hung_Thai_Backend_Developer.pdf
#   2) Build site  -> cập nhật out/cv.html (sẵn sàng deploy)
#  Cách dùng:  ./update-cv.sh
# ============================================================
set -e
cd "$(dirname "$0")"

SRC="public/cv.html"
PDF="docs/Hung_Thai_Backend_Developer.pdf"

if [ ! -f "$SRC" ]; then
  echo "❌ Không tìm thấy $SRC" >&2
  exit 1
fi

echo "▶ Xuất PDF từ $SRC ..."
google-chrome --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf="$PDF" \
  "file://$PWD/$SRC" >/dev/null
echo "  ✓ PDF: $PDF"

echo "▶ Build lại site (public/cv.html -> out/cv.html) ..."
npm run build >/dev/null 2>&1
echo "  ✓ Build xong — out/cv.html sẵn sàng để deploy"

echo "▶ Xong! Deploy lên Proxmox (bước riêng) như bình thường."
