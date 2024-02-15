import { it, describe } from 'vitest';
import EditInvoice from './EditInvoice';
import { renderWithInfrastructure } from '../utils/render-with-router';
import { Route, Routes } from 'react-router-dom';
import { screen } from '@testing-library/react';

describe('Edit Invoice', () => {
  it('should display form', async () => {
    renderWithInfrastructure(
      <Routes>
        <Route element={<EditInvoice />} path="edit/:id" />
      </Routes>,

      { route: 'edit/123' },
    );

    expect(screen.findByText('No.')).toBeInTheDocument();
    // expect(screen.findByText('Invoices')).toBeInTheDocument();
    // expect(screen.getByLabelText('No.')).toBe('6e1a92c1-6ac3-43ce-8ef4-19b5938b1935');
  });
});
