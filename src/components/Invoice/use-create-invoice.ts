import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IInvoiceForm } from '../Models/Form/InvoiceForm.interface';
import { invoiceFormSchema } from '../Models/Form/InvoiceForm.interface';
import { NotificationContext } from '../../App';
import * as React from 'react';

const createInvoice = (data: IInvoiceForm) =>
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

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  const { notification, setNotification } = React.useContext(NotificationContext);

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
