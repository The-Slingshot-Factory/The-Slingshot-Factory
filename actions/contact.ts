import { Resend } from "resend"

"use server"


const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
        return {
            success: false,
            message: "All fields are required",
        }
    }

    if (!email.includes("@")) {
        return {
            success: false,
            message: "Please enter a valid email address",
        }
    }

    try {
        await resend.emails.send({
            from: "Contact Form <team@theslingshotfactory.com>",
            to: "team@theslingshotfactory.com",
            subject: "New Contact Form Submission",
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        })

        return {
            success: true,
            message: "Message sent successfully! We'll get back to you soon.",
        }
    } catch (error) {
        return {
            success: false,
            message: "Failed to send message. Please try again later.",
        }
    }
}
