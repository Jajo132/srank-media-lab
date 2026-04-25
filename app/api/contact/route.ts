import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // =====================================
    // EMAIL SENT TO YOU
    // =====================================

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Contact Form Message - ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 12px;">
            <h1 style="margin-bottom: 20px;">New Message</h1>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <div style="margin-top: 20px; padding: 20px; background: #f2f2f2; border-radius: 8px;">
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // =====================================
    // AUTO REPLY TO VISITOR
    // =====================================

    await transporter.sendMail({
      from: `Srank Media Lab <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message | Srank Media Lab",

      html: `
        <div style="font-family: Arial, sans-serif; background: #0f1720; padding: 40px; color: white;">
          <div style="max-width: 650px; margin: auto; background: #111827; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">

            <div style="padding: 40px;">
              <div style="margin-bottom: 24px;">
                <img
                  src="https://srankmedialab.nl/og-image.jpg"
                  alt="Srank Media Lab Logo"
                  width="72"
                  height="72"
                  style="display:block; margin-bottom:20px; border-radius:16px;"
                />

                <h1 style="font-size: 32px; margin-bottom: 10px; letter-spacing: 2px;">
                  SRANK MEDIA LAB
                </h1>
              </div>

              <p style="color: #9ca3af; margin-bottom: 30px;">
                Cinematic FPV • Drone Storytelling • Brand Visuals
              </p>

              <h2 style="font-size: 24px; margin-bottom: 20px;">
                Hey ${name},
              </h2>

              <p style="line-height: 1.8; color: #d1d5db;">
                Thank you for reaching out to Srank Media Lab.
              </p>

              <p style="line-height: 1.8; color: #d1d5db;">
                Your message has been received successfully and I’ll get back to you as soon as possible.
              </p>

              <div style="margin-top: 30px; padding: 24px; background: rgba(255,255,255,0.04); border-radius: 12px;">
                <p style="margin-bottom: 10px; color: white;">
                  <strong>Your Subject:</strong>
                </p>

                <p style="color: #9ca3af;">
                  ${subject}
                </p>
              </div>

              <div style="margin-top: 40px;">
                <a
                  href="https://srankmedialab.nl"
                  style="display: inline-block; padding: 14px 28px; background: white; color: black; text-decoration: none; border-radius: 12px; font-weight: bold;"
                >
                  Visit Website
                </a>
              </div>

              <p style="margin-top: 40px; color: #6b7280; font-size: 14px; line-height: 1.6;">
                Srank Media Lab<br/>
                Cinematic FPV & Creative Visual Production
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}