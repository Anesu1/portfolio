import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { ownerNotificationEmail, senderConfirmationEmail } from "./email-templates";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 500 });
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <hello@anesundoro.me>";
  const ownerEmail = process.env.CONTACT_TO_EMAIL ?? "ndoroanesuk@gmail.com";

  const notification = ownerNotificationEmail({ name, email, message });
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: ownerEmail,
    replyTo: email,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: "Message failed to send." }, { status: 502 });
  }

  // Best-effort confirmation back to the sender — the owner has already
  // received the real message above, so a failure here shouldn't fail the
  // request, just get logged.
  const confirmation = senderConfirmationEmail({ name });
  const { error: confirmationError } = await resend.emails.send({
    from: fromEmail,
    to: email,
    replyTo: ownerEmail,
    subject: confirmation.subject,
    html: confirmation.html,
    text: confirmation.text,
  });

  if (confirmationError) {
    console.error("Resend confirmation email error", confirmationError);
  }

  return NextResponse.json({ ok: true });
}
