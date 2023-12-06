import { useParams } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import { useInvoice } from './use-invoice';

export default function EditInvoice() {
  const { id } = useParams();
  const { data } = useInvoice(id as string);

  if (!data) {
    return <div>Loading</div>;
  }

  data.createdAt = new Date(data.createdAt as unknown as string);
  data.validUntil = new Date(data.validUntil as unknown as string);

  return <InvoiceForm defaultValues={data}></InvoiceForm>;
}
