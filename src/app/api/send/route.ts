import EmailTemplate from "@/components/templates/Emails/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log("Voici les données de mon body:", body);

    const { firstname, nbOfParticipants } = body;

    const data = await resend.emails.send({
      from: "Thiop <contact@thiopthiopbike.com>",
      to: ["mathieu.elisa@gmail.com"],
      subject: "Hello world test",
      react: EmailTemplate({
        firstName: firstname,
        participants: nbOfParticipants,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
