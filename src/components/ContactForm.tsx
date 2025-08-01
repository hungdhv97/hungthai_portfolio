import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const ContactForm = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="icon_underline">Send me a mail.</CardTitle>
                <CardDescription>
                    <a href="mailto:hungdhv97@gmail.com" className="underline">
                        hungdhv97@gmail.com
                    </a>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <a
                    href="mailto:hungdhv97@gmail.com"
                    className={cn(buttonVariants({ variant: "default" }), "w-full text-center")}
                >
                    Compose Email
                </a>
            </CardFooter>
        </Card>
    );
};

export default ContactForm;
