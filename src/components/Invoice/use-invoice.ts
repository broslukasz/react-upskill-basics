import { useQuery } from '@tanstack/react-query';
import type { IInvoiceForm } from '../Models/InvoiceForm.interface';

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
      .then((res) => res.json());

export const useInvoice = (id: string) =>
  useQuery<IInvoiceForm>({
    queryFn: getInvoice(id),
    queryKey: ['invoices', 'id'],
  });
