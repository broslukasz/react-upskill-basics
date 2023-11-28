import { z } from 'zod';

export const amountsFormSchema = z.array(
  z.object({
    id: z.string().max(50),
    name: z.string().min(3).max(50),
    amount: z
      .number()
      .min(5)
      .max(1000)
      .nullable()
      .refine((val) => val !== null, 'Value cannot be empty'),
    unit: z.string().min(1).max(3),
    tax: z
      .number()
      .min(5)
      .max(1000)
      .nullable()
      .refine((val) => val !== null, 'Value cannot be empty'),
    price: z
      .number()
      .min(5)
      .max(1000)
      .nullable()
      .refine((val) => val !== null, 'Value cannot be empty'),
  }),
);

export type IAmountsForm = z.infer<typeof amountsFormSchema>;