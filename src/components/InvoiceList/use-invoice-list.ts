import { useQuery } from '@tanstack/react-query';
import type { IInvoiceForm } from '../Models/InvoiceForm.interface';

const getInvoices = ({ signal }: { signal: AbortSignal }) =>
  fetch('api/invoices', { signal })
    .then((res) => {
      if (res.status > 399) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      return res;
    })
    .then((res) => res.json());

export const useInvoiceList = () =>
  useQuery<IInvoiceForm[]>({
    queryFn: getInvoices,
    queryKey: ['invoices'],
  });
