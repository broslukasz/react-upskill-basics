import { useParams } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import { useInvoice } from './use-invoice';
import { z } from 'zod';
import { useUpdateInvoice } from './use-update-invoice';

export const invoiceParamsSchema = z.object({
  id: z.string(),
});

export default function EditInvoice() {
  const { id } = invoiceParamsSchema.parse(useParams());
  const { data } = useInvoice(id);

  if (!data) {
    return <div>Loading</div>;
  }

  return <InvoiceForm onFormSave={useUpdateInvoice} defaultValues={data}></InvoiceForm>;
}
