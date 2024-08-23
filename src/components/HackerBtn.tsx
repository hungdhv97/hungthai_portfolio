import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

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
