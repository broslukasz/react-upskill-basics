import { useQuery } from '@tanstack/react-query';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';
import { z } from 'zod';

const getInvoiceList = ({ signal }: { signal: AbortSignal }) =>
  fetch('api/invoices', { signal })
    .then((res) => {
      if (res.status > 399) {
        throw new Error(`Request fetch failed with status ${res.status}`);
      }

      return res;
    })
    .then((res) => res.json())
    .then((res) => z.array(invoiceFormSchema).parse(res));

export const useInvoiceList = () =>
  useQuery({
    queryFn: getInvoiceList,
    queryKey: ['invoices'],
  });
