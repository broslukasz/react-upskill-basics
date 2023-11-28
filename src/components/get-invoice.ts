import { useQuery } from '@tanstack/react-query';

const getInvoice =
  (id: string) =>
  ({ signal }: { signal: AbortSignal }) =>
    fetch(`/api/invoices/${id}`, { signal })
      .then((res) => {
        if (res.status > 299) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        return res;
      })
      .then((res) => res.json());

export const useInvoice = (id: string) =>
  useQuery({
    queryFn: getInvoice(id),
    queryKey: ['invoices'],
  });
