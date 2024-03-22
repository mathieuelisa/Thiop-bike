import EmailTemplate from "@/components/templates/Emails/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log("Voici les données de mon body:", body);

    const data = await resend.emails.send({
      from: "Mathieu <mathieu.elisag@gmail.com>",
      to: ["mathieu.elisa@gmail.com"],
      subject: "Hello world test",
      react: EmailTemplate({ firstName: "Mathieu" }),
    });

    // if (data.status === "success") {
    //   return NextResponse.json({ message: "Email envoyé" });
    // }
    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
