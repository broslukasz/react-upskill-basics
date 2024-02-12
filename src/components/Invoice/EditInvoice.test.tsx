import { screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import EditInvoice from './EditInvoice';
import { renderWithRouter } from '../utils/render-with-router';
import { Route, Routes } from 'react-router-dom';

describe('Edit Invoice', () => {
  it('should work', async () => {
    renderWithRouter(
      <Routes>
        <Route element=<EditInvoice /> path="/invoice/:id" />
      </Routes>,

      { route: 'api/invoices/123' },
    );
  });
});
