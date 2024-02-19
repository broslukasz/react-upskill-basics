import { INVOICE_HANDLERS } from './handlers/invoice-handlers';
import { INVOICE_LIST_HANDLERS } from './handlers/invoice-list-handlers';

export const handlers = [...INVOICE_LIST_HANDLERS, ...INVOICE_HANDLERS];
