// lib/mail.ts
import nodemailer from "nodemailer";
import { ContactFormData } from "@/types/contact";

export async function sendMail({ name, email, message }: ContactFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  await transporter.sendMail({
    from: `"Email was sent from your Portfolio" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`,
  });
}
