import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IInvoiceForm } from '../Models/Form/InvoiceForm.interface';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';

import { useNotifications } from '../NotificationProvider/NotificationProvider';

const updateInvoice = (data: IInvoiceForm) =>
  fetch(`/api/invoices/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      if (res.status > 399) {
        throw new Error(`Invoice saving failed with status ${res.status}`);
      }

      return res;
    })
    .then((res) => res.json())
    .then((res) => invoiceFormSchema.parse(res));

export const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  const { setNotification } = useNotifications();

  return useMutation({
    mutationFn: updateInvoice,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['invoices'] });
      setNotification({ type: 'success', message: 'Successfully saved :)' });
    },
    onError: () => {
      setNotification({ type: 'error', message: 'Error while saved :( Try Again ;)' });
    },
  });
};
