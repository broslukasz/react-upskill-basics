import InvoiceForm from './InvoiceForm';
import type { IInvoiceForm } from '../Models/InvoiceForm.interface';
import type { IPersonalDataForm } from '../Models/PersonalDataForm.interface';
import type { IAmountsForm } from '../Models/ItemsForm.interface';

const amountsData: IAmountsForm = [
  {
    id: Date.now().toString(),
    name: '',
    amount: null,
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
  id: '',
  createdAt: null,
  validUntil: null,
  recipient: personalData,
  sender: personalData,
  items: amountsData,
  name: '',
};

export default function CreateInvoice() {
  return <InvoiceForm defaultValues={defaultValues}></InvoiceForm>;
}
