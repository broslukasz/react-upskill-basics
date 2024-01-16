import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IInvoiceForm } from '../Models/Form/InvoiceForm.interface';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';
import { useNotificationContext } from '../NotificationContext/NotificationContext';

const createInvoice = (data: IInvoiceForm) =>
  fetch(`/api/invoices`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      if (res.status > 399) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      return res;
    })
    .then((res) => res.json())
    .then((res) => invoiceFormSchema.parse(res));

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  const { setNotification } = useNotificationContext();

  return useMutation({
    mutationFn: createInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] });
      setNotification({ type: 'success', message: 'Successfully created :)' });
    },
    onError: () => {
      setNotification({ type: 'error', message: 'Error during invoic creation :( Try Again ;)' });
    },
  });
};
