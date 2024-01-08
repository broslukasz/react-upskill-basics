import { z } from 'zod';

export const personalDataFormSchema = z
  .object({
    companyName: z.string().min(3).max(50),
    city: z.string().min(1).max(50),
    street: z.string().min(1).max(50),
    postcode: z.string().min(1).max(50),
    nip: z.string().min(1).max(50),
    phone: z.string().nullable(),
    email: z.string().email().min(1).max(50),
    bankAccount: z.string().min(1).max(50),
  })
  .optional();

export type IPersonalDataForm = z.infer<typeof personalDataFormSchema>;
