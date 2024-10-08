import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
    const message = formdata.get("message");
    const name = formdata.get("name");
    const senderEmail = formdata.get("SenderEmail");
    if (!message) {
        return {
            error: "Invalid message",
        };
    }
    await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: `hungdhv97@gmail.com`,
        subject: `${name} From Contact Form.`,
        reply_to: `${senderEmail}`,
        text: `${message}`,
    });

    return redirect("/");
};
