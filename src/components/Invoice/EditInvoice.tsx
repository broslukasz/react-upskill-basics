import { useParams } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import { useInvoice } from './use-invoice';
import { z } from 'zod';
import { useUpdateInvoice } from './use-update-invoice';
import type { SubmitHandler } from 'react-hook-form';
import type { IInvoiceForm } from '../Models/Form/InvoiceForm.interface';

export const invoiceParamsSchema = z.object({
  id: z.string(),
});

export default function EditInvoice() {
  const { id } = invoiceParamsSchema.parse(useParams());
  const { data } = useInvoice(id);

  const { mutate } = useUpdateInvoice();
  const onSubmit: SubmitHandler<IInvoiceForm> = (data) => mutate(data);

  if (!data) {
    return <div>Loading</div>;
  }

  return <InvoiceForm onSubmit={onSubmit} defaultValues={data} />;
}
