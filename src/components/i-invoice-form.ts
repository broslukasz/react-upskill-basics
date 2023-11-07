import type { IPersonalDataForm } from "./i-personal-data-form";

export interface IInvoiceForm {
  invoiceNumber: number | null,
  dateFrom: Date | null;
  dateTo: Date | null;
  recipient: IPersonalDataForm;
  sender: IPersonalDataForm
}