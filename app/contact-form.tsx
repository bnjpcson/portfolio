// components/client/ContactForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { ContactFormSchema } from "@/types/contact";
import z from "zod";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string | string[];
    email?: string | string[];
    message?: string | string[];
  }>({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({}); // clear previous errors

    try {
      setIsLoading(true);

      // Wait for grecaptcha to be ready
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const grecaptcha = (window as any).grecaptcha;
      if (!grecaptcha) throw new Error("reCAPTCHA not loaded");

      const token = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken: token }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors); // 🟢 store validation errors
        }
        throw new Error("Validation or server error");
      }
      toast.success("Your message was sent successfully!");
      setForm({ name: "", email: "", message: "" }); // reset form
    } catch {
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    // Real-time validation
    const result = ContactFormSchema.safeParse({ ...form, [name]: value });

    if (!result.success) {
      const flattened = z.flattenError(result.error);

      // Safely get error for the current field
      const fieldError = flattened.fieldErrors[name as keyof typeof form]?.[0];

      setErrors({ ...errors, [name]: fieldError || "" });
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear the error when valid
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-3">
        <Label htmlFor="name">
          Name<span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="email">
          Email<span className="text-red-500">*</span>
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="message">
          Message<span className="text-red-500">*</span>
        </Label>
        <Textarea
          name="message"
          id="message"
          placeholder="Your Message"
          rows={20}
          value={form.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full cursor-pointer"
        disabled={isLoading}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
