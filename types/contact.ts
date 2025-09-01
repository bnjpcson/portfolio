// types/contact.ts
import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().nonempty("This field is required"),
  email: z.email("Invalid Email Address"),
  message: z.string().nonempty("This field is required"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
