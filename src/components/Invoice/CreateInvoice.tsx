import InvoiceForm from './InvoiceForm';
import type { IInvoiceForm } from '../Models/Form/InvoiceForm.interface';
import type { IPersonalDataForm } from '../Models/Form/PersonalDataForm.interface';
import type { IAmountsForm } from '../Models/Form/ItemsForm.interface';
import { useCreateInvoice } from './use-create-invoice';

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
  return <InvoiceForm onFormSave={useCreateInvoice} defaultValues={defaultValues}></InvoiceForm>;
}
