import { z } from 'zod';

export const invoiceParamsSchema = z.object({
  id: z.string(),
});
