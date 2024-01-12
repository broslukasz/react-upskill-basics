import { useQuery } from '@tanstack/react-query';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';

const getInvoice =
  (id: string) =>
  ({ signal }: { signal: AbortSignal }) =>
    fetch(`/api/invoices/${id}`, { signal })
      .then((res) => {
        if (res.status > 399) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        return res;
      })
      .then((res) => res.json())
      .then((res) => invoiceFormSchema.parse(res));

export const useInvoice = (id: string) =>
  useQuery({
    queryFn: getInvoice(id),
    queryKey: ['invoices', id],
  });
