import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, category, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please configure RESEND_API_KEY in your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "awodiabdulmujeeb@gmail.com";

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio Inquiry <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry] ${category || "General"} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Portfolio Message</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; margin: 0; padding: 24px; color: #231C18;">
            <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; border: 1px solid rgba(181, 82, 42, 0.15); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); overflow: hidden;">
              <div style="background: linear-gradient(135deg, #E87040 0%, #B5522A 100%); padding: 24px 32px; color: white;">
                <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Message Received</h1>
                <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Someone submitted an inquiry through your portfolio contact form.</p>
              </div>
              <div style="padding: 32px;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE6; font-size: 13px; color: #8C7B72; font-weight: 600; width: 120px; text-transform: uppercase; letter-spacing: 0.05em;">Sender</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE6; font-size: 15px; color: #231C18; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE6; font-size: 13px; color: #8C7B72; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE6; font-size: 15px; color: #E87040; font-weight: 500;">
                      <a href="mailto:${email}" style="color: #E87040; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE6; font-size: 13px; color: #8C7B72; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Category</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE6; font-size: 14px; color: #231C18;">
                      <span style="display: inline-block; background: rgba(232, 112, 64, 0.1); color: #B5522A; padding: 4px 10px; border-radius: 9999px; font-weight: 600; font-size: 12px;">
                        ${category || "General Inquiry"}
                      </span>
                    </td>
                  </tr>
                </table>

                <div style="margin-top: 24px;">
                  <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #8C7B72; text-transform: uppercase; letter-spacing: 0.05em;">Message Body</h3>
                  <div style="background-color: #FAF7F2; border: 1px solid rgba(181, 82, 42, 0.12); border-radius: 12px; padding: 18px 20px; font-size: 15px; line-height: 1.6; color: #231C18; white-space: pre-wrap;">${message}</div>
                </div>

                <div style="margin-top: 32px; text-align: center;">
                  <a href="mailto:${email}?subject=Re: [Portfolio Inquiry] ${category || "Project"}" style="display: inline-block; background: #E87040; color: #FFFFFF; font-weight: 600; font-size: 14px; text-decoration: none; padding: 12px 28px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(232, 112, 64, 0.35);">
                    Reply to ${name}
                  </a>
                </div>
              </div>
              <div style="padding: 16px 32px; background: #F6F2EB; border-top: 1px solid rgba(181, 82, 42, 0.1); text-align: center; font-size: 12px; color: #8C7B72;">
                Sent from Abdulmujeeb Awodi's Portfolio Contact Form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: unknown) {
    console.error("Contact API Server Error:", err);
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
