import Typography from "@/components/ui/Typography";
import React from "react";

interface EmailTemplateProps {
  lastname: string;
  firstname: string;
  nbOfParticipants: string;
  email: string;
  numberphone: string;
  allergy: string;
  additionalInfo: string;
  excursions: string;
}

function EmailTemplate({
  lastname,
  firstname,
  nbOfParticipants,
  email,
  numberphone,
  allergy,
  additionalInfo,
  excursions,
}: EmailTemplateProps): JSX.Element {
  return (
    <div>
      <Typography type='h1' className='font-semibold'>
        Merci {firstname}, pour ta reservation
      </Typography>
      <Typography className='mb-5'>
        Nous sommes ravis de te confirmer ta réservation pour l&#39;excursion
        que tu as choisie.
      </Typography>

      <div className='flex flex-col border-2'>
        <Typography type='h3'> Voici un récapitulatif de ton choix</Typography>
        <Typography>Excursion : {excursions} </Typography>
        <Typography>Nombre de participants : {nbOfParticipants}</Typography>
      </div>

      <div className='flex flex-col border-2'>
        <Typography type='h3'> Informations de contact</Typography>
        <Typography>
          Nom:{firstname} {lastname}
        </Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Numéro de telephone: {numberphone}</Typography>
        <Typography>Allergies: {allergy}</Typography>
      </div>

      <div>
        <Typography type='h3'> Informations complémentaires ?</Typography>
        <Typography>{additionalInfo}</Typography>
      </div>

      <Typography>
        Nous n&#39;hesiteront pas à revenir vers toi dans un délai maximum de
        48h.
      </Typography>
    </div>
  );
}

export default EmailTemplate;
