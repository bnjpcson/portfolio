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

    const body = parsed.data;
    await sendMail(body);

    return NextResponse.json({ success: true });

    //DISABLE CURRENT RECAPTCHA CHECKING

    // const json = await req.json();
    // const recaptchaToken = json.recaptchaToken;

    // if (!recaptchaToken) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       errors: { captcha: "reCAPTCHA token missing" },
    //     },
    //     { status: 400 }
    //   );
    // }

    // const isHuman = await verifyRecaptchaV3(recaptchaToken);

    // if (!isHuman) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       errors: { captcha: "reCAPTCHA verification failed" },
    //     },
    //     { status: 400 }
    //   );
    // }

    // const parsed = ContactFormSchema.safeParse(json);

    // if (!parsed.success) {
    //   const flattened = z.flattenError(parsed.error);
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       errors: flattened.fieldErrors,
    //     },
    //     { status: 400 }
    //   );
    // }

    // const body = parsed.data;
    // await sendMail(body);

    // return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
