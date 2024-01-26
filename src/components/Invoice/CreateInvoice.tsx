import InvoiceForm from './InvoiceForm';
import type { IInvoiceForm } from '../Models/Form/InvoiceForm.interface';
import type { IPersonalDataForm } from '../Models/Form/PersonalDataForm.interface';
import type { IAmountsForm } from '../Models/Form/ItemsForm.interface';
import { useCreateInvoice } from './use-create-invoice';
import type { SubmitHandler } from 'react-hook-form';

const amountsData: IAmountsForm = [
  {
    name: '',
    amount: 0,
    unit: '',
    tax: null,
    price: null,
  },
];

const personalData: IPersonalDataForm = {
  companyName: '',
  city: '',
  street: '',
  postcode: '',
  nip: '',
  phone: null,
  email: '',
  bankAccount: '',
};

const defaultValues: IInvoiceForm = {
  createdAt: '',
  validUntil: '',
  recipient: personalData,
  sender: personalData,
  items: amountsData,
  name: 'My Company Invoice',
};

export default function CreateInvoice() {
  const { mutate } = useCreateInvoice();
  const onSubmit: SubmitHandler<IInvoiceForm> = (data) => mutate(data);

  return <InvoiceForm onSubmit={onSubmit} defaultValues={defaultValues}></InvoiceForm>;
}
