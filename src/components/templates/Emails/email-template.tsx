import Typography from "@/components/ui/Typography";
import React from "react";

interface EmailTemplateProps {
  lastname: string;
  firstname: string;
  nbOfParticipants: string;
  email: string;
  phone: string;
  allergy: string;
  additionalInfo: string;
  excursions: string;
}

function EmailTemplate({
  lastname,
  firstname,
  nbOfParticipants,
  email,
  phone,
  allergy,
  additionalInfo,
  excursions,
}: EmailTemplateProps): JSX.Element {
  return (
    <div>
      <Typography type='h1' className='font-semibold'>
        {firstname}, ta réservation a bien été reçue.
      </Typography>
      <Typography className='mb-5'>
        Nous sommes ravis de te confirmer ta réservation pour l&#39;excursion
        que tu as choisie. Nous n&#39;hésiterons pas à revenir vers toi dans un
        délai maximum de 48 h.
      </Typography>

      <div className='flex flex-col border-2'>
        <Typography type='h3'> Informations sur l&#39;excursion</Typography>
        <Typography>Excursion : &quot;{excursions}&quot; </Typography>
        <Typography>Nombre de participants : {nbOfParticipants}</Typography>
      </div>

      <div className='flex flex-col border-2'>
        <Typography type='h3'> Informations de contact</Typography>
        <Typography>Nom: {lastname}</Typography>
        <Typography>Prénom: {firstname}</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Numéro de téléphone: {phone}</Typography>
        <Typography>Allergies: {allergy}</Typography>
      </div>

      <div>
        <Typography type='h3'> Informations complémentaires ?</Typography>
        <Typography>{additionalInfo}</Typography>
      </div>
    </div>
  );
}

export default EmailTemplate;
