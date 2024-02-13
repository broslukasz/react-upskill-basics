import { useQuery, useQueryClient } from '@tanstack/react-query';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';
import { z } from 'zod';
import { useNotifications } from '../NotificationProvider/NotificationProvider';

const getInvoiceList = ({ signal }: { signal: AbortSignal }) =>
  fetch('api/invoices', { signal })
    .then((res) => {
      if (res.status > 399) {
        const { setNotification } = useNotifications();

        setNotification({ type: 'error', message: 'Invoice list fetch failed :( Try Again ;)' });

        throw new Error(`Invoice list fetch failed with status ${res.status}`);
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
