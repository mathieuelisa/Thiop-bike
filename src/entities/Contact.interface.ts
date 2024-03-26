import { object, string, z, date } from "zod";
import { phoneRegex } from "../../utils/commonFn";

export const customerSchema = object({
  firstname: string()
    .min(2, "Prénom avec au moins 2 caractères")
    .max(30, "Le prénom ne peut pas dépasser 30 caractères"),
  lastname: string()
    .min(2, "Nom doit comporter au moins 2 caractères")
    .max(30, "Le nom ne peut pas dépasser 30 caractères"),
  phone: string().regex(phoneRegex, "Numéro de téléphone invalide"),
  email: string().email("Votre adresse email est invalide"),
  excursions: string(),
  nbOfParticipants: string(),
  date: z.date(),
  allergy: string(),
  additionalInfo: string(),
});

export type TCustomerFormSchema = z.infer<typeof customerSchema>;
