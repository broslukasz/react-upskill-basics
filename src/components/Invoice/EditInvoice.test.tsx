import { it, describe } from 'vitest';
import EditInvoice from './EditInvoice';
import { renderWithInfrastructure } from '../utils/render-with-router';
import { Route, Routes } from 'react-router-dom';
import { screen } from '@testing-library/react';

describe('Edit Invoice', () => {
  it('should display form controls', async () => {
    renderWithInfrastructure(
      <Routes>
        <Route element={<EditInvoice />} path="edit/:id" />
      </Routes>,

      { route: 'edit/123' },
    );

    expect(await screen.findByLabelText('No.')).toBeInTheDocument();
    expect(await screen.findByLabelText('Company name')).toBeInTheDocument();
    expect(await screen.findByLabelText('Bank Account')).toBeInTheDocument();
    expect(await screen.findByLabelText('Amount')).toBeInTheDocument();
  });

  it.only('should display values', async () => {
    renderWithInfrastructure(
      <Routes>
        <Route element={<EditInvoice />} path="edit/:id" />
      </Routes>,

      { route: 'edit/123' },
    );

    expect(await screen.findByLabelText('No.', { selector: 'input' })).toHaveValue(
      '6e1a92c1-6ac3-43ce-8ef4-19b5938b1935',
    );
    expect(await screen.findByLabelText('Company name', { selector: 'input' })).toHaveValue('Von - Beier');
    expect(await screen.findByLabelText('Bank Account', { selector: 'input' })).toHaveValue('710479112921175505982856');
    expect(await screen.findByLabelText('Amount', { selector: 'input' })).toHaveValue(59);
  });
});
