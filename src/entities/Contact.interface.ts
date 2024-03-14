import { object, string, number, z } from "zod";

export const customerSchema = object({
  firstname: string().min(2).max(30),
  lastname: string().min(2).max(30),
  phoneNumber: string().max(15),
  email: string().email(),
  excursions: string(),
  nbOfParticipants: string(),
  allergy: string(),
  additionalInfo: string(),
});

export type TCustomerFormSchema = z.infer<typeof customerSchema>;
