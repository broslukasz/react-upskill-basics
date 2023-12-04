import { useQuery } from '@tanstack/react-query';

const getInvoices = ({ signal }: { signal: AbortSignal }) =>
  fetch('api/invoices', { signal })
    .then((res) => {
      if (res.status > 299) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      return res;
    })
    .then((res) => res.json());

export const useInvoiceList = () =>
  useQuery({
    queryFn: getInvoices,
    queryKey: ['invoices', 'id'],
  });
