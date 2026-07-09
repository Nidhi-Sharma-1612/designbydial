import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { name, email, phone, channelManager, channelManagerOther, message } = parsed.data;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyEmail = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !notifyEmail) {
    console.warn(
      "Contact form submission received but SMTP is not configured:",
      { name, email, phone, channelManager, channelManagerOther, message }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: notifyEmail,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Channel Manager: ${channelManager}${channelManager === "Other" && channelManagerOther ? ` (${channelManagerOther})` : ""}`,
        `Message: ${message || "—"}`,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("Failed to send contact notification email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
