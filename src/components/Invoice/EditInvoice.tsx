import { useParams } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import { useInvoice } from './use-invoice';
import type { IInvoiceForm } from '../Models/InvoiceForm.interface';

export default function EditInvoice() {
  const { id } = useParams();
  const { data } = useInvoice(id as string);
  const invoice = data as IInvoiceForm;

  if (!invoice) {
    return <div>Loading</div>;
  }

  invoice.createdAt = new Date(invoice.createdAt as unknown as string);
  invoice.validUntil = new Date(invoice.validUntil as unknown as string);

  return <InvoiceForm defaultValues={invoice}></InvoiceForm>;
}
