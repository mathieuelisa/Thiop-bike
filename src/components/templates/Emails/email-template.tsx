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
        Bonjour {firstname}, ta réservation a bien été reçue.
      </Typography>
      <Typography className='mb-5'>
        Nous sommes ravis de te confirmer ta réservation pour l&#39;excursion
        que tu as choisie.
        <br /> Nous n&#39;hésiterons pas à revenir vers toi dans un délai
        maximum de 48 h.
        <br />
        <br /> Si tu as des questions d&#39;ici là n&#39;hésite pas à nous
        contacter via thiopthiopbike@gmail.com
        <br />
        <br />
      </Typography>

      <div className='flex flex-col border-2'>
        <Typography type='h2'> Informations sur l&#39;excursion</Typography>
        <Typography>Excursion : &quot;{excursions}&quot; </Typography>
        <Typography>
          Nombre de participants : {nbOfParticipants} personne(s)
        </Typography>
      </div>

      <div className='flex flex-col border-2'>
        <Typography type='h2'> Informations de contact</Typography>
        <Typography>Nom: {lastname}</Typography>
        <Typography>Prénom: {firstname}</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Numéro de téléphone: {phone}</Typography>
        <Typography>Allergies: {allergy}</Typography>
      </div>
      <br />
      <br />
      <div>
        <Typography type='h3'>Informations complémentaires ?</Typography>
        <Typography>{additionalInfo}</Typography>
      </div>

      <div>
        <Typography>
          Merci de ne pas répondre à cet email. Pour nous contacter, cliquez
          sur: thiopthiopbike@gmail.com
        </Typography>
      </div>
    </div>
  );
}

export default EmailTemplate;
