import { buttonVariants } from "./ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HackerBtn = ({ label }: { label: string }) => {
    return (
        <Link
            href="https://t.me/hungdhv97"
            target="blank"
            className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "flex",
            )}
        >
            <Send className="mx-1" />
            {label}
        </Link>
    );
};

export default HackerBtn;
