import { EDIT_INVOICE_HANDLERS } from './handlers/edit-invoice-handlers';
import { INVOICE_LIST_HANDLERS } from './handlers/invoice-list-handlers';

export const handlers = [...INVOICE_LIST_HANDLERS, ...EDIT_INVOICE_HANDLERS];
