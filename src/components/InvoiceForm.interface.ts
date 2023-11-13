import type { IAmountsForm } from './AmountsForm.interface';
import type { IPersonalDataForm } from './PersonalDataForm.interface';

export interface IInvoiceForm {
  invoiceNumber: number | null;
  dateFrom: Date | null;
  dateTo: Date | null;
  recipient: IPersonalDataForm;
  sender: IPersonalDataForm;
  amounts: IAmountsForm[];
}
