import EmailTemplate from "@/components/templates/Emails/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    const {
      lastname,
      firstname,
      nbOfParticipants,
      email,
      phone,
      allergy,
      additionalInfo,
      excursions,
      date,
    } = body;

    const data = await resend.emails.send({
      from: "Thiop Thiop Bike <info@thiopthiopbike.com>",
      to: ["mathieu.elisa@gmail.com"], // Ne pas oublier de mettre le email
      subject: `Confirmation pour ton excursion - ${excursions}`,
      react: EmailTemplate({
        firstname,
        lastname,
        nbOfParticipants,
        email,
        phone,
        allergy,
        additionalInfo,
        excursions,
        date,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
