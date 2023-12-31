import { z } from 'zod';
import { personalDataFormSchema } from './PersonalDataForm.interface';
import { amountsFormSchema as itemsFormSchema } from './ItemsForm.interface';

export const invoiceFormSchema = z.object({
  id: z.string().min(1).max(100),
  createdAt: z
    .string()
    .nullable()
    .refine((val) => val !== null, 'Value cannot be empty'),
  validUntil: z
    .string()
    .nullable()
    .refine((val) => val !== null, 'Value cannot be empty'),
  recipient: personalDataFormSchema,
  sender: personalDataFormSchema,
  items: itemsFormSchema,
});

export type IInvoiceForm = z.infer<typeof invoiceFormSchema>;
