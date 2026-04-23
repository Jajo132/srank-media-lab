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

}