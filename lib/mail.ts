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

export const verifyRecaptchaV3 = async (token: string): Promise<boolean> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY!;
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return data.success && data.score >= 0.5;
};
