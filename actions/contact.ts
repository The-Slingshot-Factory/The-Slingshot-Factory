"use server"


import { Resend } from "resend"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

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
        // Send notification email to team
        await resend.emails.send({
            from: "Contact Form <team@theslingshotfactory.com>",
            to: "team@theslingshotfactory.com",
            subject: "New Contact Form Submission",
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        })

        // Send confirmation email to sender
        await resend.emails.send({
            from: "The Slingshot Factory Team <team@theslingshotfactory.com>",
            to: email,
            subject: "Thank you for contacting The Slingshot Factory",
            text: `Hi ${name},

Thank you for reaching out to The Slingshot Factory! We have received your message and will get back to you as soon as possible.

Here's a copy of your message:
"${message}"

We typically respond within 24 hours during business days. If you have any urgent questions, please don't hesitate to reach out directly.

Best regards,
The Slingshot Factory Team
`,
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
