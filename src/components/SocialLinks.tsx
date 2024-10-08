import { cn } from "@/lib/utils";
import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";
import { buttonVariants } from "./ui/button";

const SocialLinks = () => {
    const links = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/doanhung.thai.1",
            icon: <Facebook />,
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/hungdhv97/",
            icon: <Linkedin />,
        },
    ];
    return (
        <>
            {links.map((itm, indx) => {
                const timing = 0.55 + indx * 0.125;

                return (
                    <FramerWrapper key={indx} delay={timing} y={50}>
                        <Link
                            target="blank"
                            href={itm.link}
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "icon",
                                }),
                            )}
                        >
                            {itm.icon}
                        </Link>
                    </FramerWrapper>
                );
            })}
        </>
    );
};

export default SocialLinks;
