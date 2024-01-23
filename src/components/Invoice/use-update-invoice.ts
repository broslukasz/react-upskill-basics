import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IInvoiceForm } from '../Models/Form/InvoiceForm.interface';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';

import { useNotifications } from '../NotificationContext/NotificationContext';

const updateInvoice = (data: IInvoiceForm) =>
  fetch(`/api/invoices/${data.id}`, {
    method: 'PUT',
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

export const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  const { setNotification } = useNotifications();

  return useMutation({
    mutationFn: updateInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] });
        if (setNotification) {
            setNotification({type: 'success', message: 'Successfully saved :)'});
        }
    },
    onError: () => {
        if (setNotification) {
            setNotification({type: 'error', message: 'Error while saved :( Try Again ;)'});
        }
    },
  });
};
