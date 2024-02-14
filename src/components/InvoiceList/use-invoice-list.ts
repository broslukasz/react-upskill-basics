import { useQuery } from '@tanstack/react-query';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';
import { z } from 'zod';
import { useNotifications } from '../NotificationProvider/NotificationProvider';
import { useEffect } from 'react';

const getInvoiceList = ({ signal }: { signal: AbortSignal }) =>
  fetch('api/invoices', { signal })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Invoice list fetch failed with status ${res.status}`);
      }

      return res;
    })
    .then((res) => res.json())
    .then((res) => z.array(invoiceFormSchema).parse(res));

export const useInvoiceList = () => {
  const { setNotification } = useNotifications();

  const queryData = useQuery({
    queryFn: getInvoiceList,
    queryKey: ['invoices'],
  });

  const { error } = queryData;

  useEffect(() => {
    setNotification({ type: 'error', message: error?.message as string });
  }, [error]);

  return queryData;
};
