import { useQuery } from '@tanstack/react-query';

const getInvoices = () =>
  fetch('api/invoices')
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
    queryKey: ['invoices'],
  });
