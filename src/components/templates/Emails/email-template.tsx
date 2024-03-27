import Typography from "@/components/ui/Typography";
import React from "react";
// import { format, parse } from "date-fns";

interface EmailTemplateProps {
  lastname: string;
  firstname: string;
  nbOfParticipants: string;
  email: string;
  phone: string;
  allergy: string;
  additionalInfo: string;
  excursions: string;
  date: string;
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
  date,
}: EmailTemplateProps): JSX.Element {
  // const parseDate = parse(date, "yyyy-MM-dd", new Date());
  // const formattedDate = format(parseDate, "EEEE dd MMMM yyyy", {
  //   locale: require("date-fns/locale/fr"),
  // });

  return (
    <div>
      <Typography type='h1' className='font-semibold'>
        Bonjour {firstname}, votre réservation a bien été reçue.
      </Typography>
      <Typography className='mb-5'>
        Merci {firstname} de nous avoir soumis votre demande de réservation.
        <br />
        <br /> Nous n&#39;hésiterons pas à revenir vers vous dans un délai
        maximum de 48h.
        <br /> Si vous avez des questions d&#39;ici là n&#39;hésitez pas à nous
        contacter par mail: contact@thiopthiopbike.com
        <br />
        <br />
      </Typography>

      <div className='flex flex-col border-2'>
        <Typography type='h2'> Informations sur l&#39;excursion</Typography>
        <Typography>Excursion : &quot;{excursions}&quot; </Typography>
        <Typography>
          Nombre de participants : {nbOfParticipants} personne(s)
        </Typography>
        <Typography>Date de réservation : le {date}</Typography>
      </div>
      <br />
      <br />
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
        <Typography type='h2'>Informations complémentaires ?</Typography>
        <Typography>{additionalInfo}</Typography>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Typography>
          Ceci est un mail automatique, merci de ne pas y répondre.
        </Typography>
      </div>
    </div>
  );
}

export default EmailTemplate;
