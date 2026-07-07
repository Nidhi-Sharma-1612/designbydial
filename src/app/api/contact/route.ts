import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { name, email, phone, channelManager, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notifyEmail = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !fromEmail || !notifyEmail) {
    console.warn(
      "Contact form submission received but Resend is not configured:",
      { name, email, phone, channelManager, message }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromEmail,
      to: notifyEmail,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Channel Manager: ${channelManager}`,
        `Message: ${message || "—"}`,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("Failed to send contact notification email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
