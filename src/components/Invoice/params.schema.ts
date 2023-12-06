import { z } from 'zod';

export const InvoiceParamsSchema = z.object({
  id: z.string(),
});
