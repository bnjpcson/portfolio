// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { ContactFormSchema } from "@/types/contact";
import z from "zod";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = ContactFormSchema.safeParse(json);

    if (!parsed.success) {
      const flattened = z.flattenError(parsed.error);
      return NextResponse.json(
        {
          success: false,
          errors: flattened.fieldErrors,
        },
        { status: 400 }
      );
    }

    // ✅ parsed.data is strongly typed ContactFormData
    const body = parsed.data;
    await sendMail(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
