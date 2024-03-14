import { object, string, z } from "zod";

export const customerSchema = object({
  firstname: string().min(2).max(30),
  lastname: string().min(2).max(30),
  object: string().max(50),
  email: string().email(),
  message: string(),
});

export type TCustomerFormSchema = z.infer<typeof customerSchema>;
