import { it, describe } from 'vitest';
import EditInvoice from './EditInvoice';
import { renderWithInfrastructure } from '../utils/render-with-router';
import { Route, Routes } from 'react-router-dom';

describe('Edit Invoice', () => {
  it('should work', async () => {
    renderWithInfrastructure(
      <Routes>
        <Route element=<EditInvoice /> path="/invoice/:id" />
      </Routes>,

      { route: 'api/invoices/123' },
    );
  });
});
