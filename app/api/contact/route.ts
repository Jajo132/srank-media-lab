import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, company, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const port = Number(process.env.SMTP_PORT || 587);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Srank Media Lab Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Srank Media Lab" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message | Srank Media Lab",
      html: `
        <div style="font-family:Arial,sans-serif;background:#0f1720;color:white;padding:30px;">
          <div style="max-width:600px;margin:auto;background:#111827;padding:30px;border-radius:16px;">
            <h1>SRANK MEDIA LAB</h1>
            <p style="color:#9ca3af;">Cinematic FPV • Drone Storytelling • Brand Visuals</p>
            <h2>Hi ${name},</h2>
            <p>Thank you for reaching out to Srank Media Lab.</p>
            <p>Your message has been received successfully. I’ll get back to you as soon as possible.</p>
            <p><strong>Your subject:</strong> ${subject}</p>
            <br />
            <a href="https://srankmedialab.nl" style="background:white;color:black;padding:12px 22px;border-radius:12px;text-decoration:none;font-weight:bold;">
              Visit Website
            </a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Email sending failed.",
      },
      { status: 500 }
    );
  }
}