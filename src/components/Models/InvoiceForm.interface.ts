import { z } from 'zod';
import { personalDataFormSchema } from './PersonalDataForm.interface';
import { amountsFormSchema } from './AmountsForm.interface';

export const invoiceFormSchema = z.object({
  invoiceNumber: z.string().min(1).max(50),
  dateFrom: z
    .date()
    .nullable()
    .refine((val) => val !== null, 'Value cannot be empty'),
  dateTo: z
    .date()
    .max(new Date(Date.now() + 1000 * 60 * 60 * 24 * 30))
    .nullable()
    .refine((val) => val !== null, 'Value cannot be empty'),
  recipient: personalDataFormSchema,
  sender: personalDataFormSchema,
  amounts: amountsFormSchema,
});

export type IInvoiceForm = z.infer<typeof invoiceFormSchema>;
