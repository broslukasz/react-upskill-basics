import { useParams } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import { useInvoice } from './use-invoice';
import { InvoiceParamsSchema } from './params.schema';

export default function EditInvoice() {
  const { id } = InvoiceParamsSchema.parse(useParams());
  const { data } = useInvoice(id);

  if (!data) {
    return <div>Loading</div>;
  }

  return <InvoiceForm defaultValues={data}></InvoiceForm>;
}
