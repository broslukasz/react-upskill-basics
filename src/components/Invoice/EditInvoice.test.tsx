import { it, describe } from 'vitest';
import EditInvoice from './EditInvoice';
import { renderWithInfrastructure } from '../utils/render-with-router';
import { Route, Routes } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { server } from '../../../setupServer';
import { HttpResponse, http } from 'msw';

describe('Edit Invoice', () => {
  it('should display form controls', async () => {
    renderWithInfrastructure(
      <Routes>
        <Route element={<EditInvoice />} path="/edit/:id" />
      </Routes>,

      { route: '/edit/6e1a92c1-6ac3-43ce-8ef4-19b5938b1935' },
    );

    expect(await screen.findByLabelText('No.')).toBeInTheDocument();
    expect(await screen.findByLabelText('Company name')).toBeInTheDocument();
    expect(await screen.findByLabelText('Bank Account')).toBeInTheDocument();
    expect(await screen.findByLabelText('Amount')).toBeInTheDocument();
  });

  it('should display values', async () => {
    renderWithInfrastructure(
      <Routes>
        <Route element={<EditInvoice />} path="/edit/:id" />
      </Routes>,

      { route: '/edit/6e1a92c1-6ac3-43ce-8ef4-19b5938b1935' },
    );

    expect(await screen.findByLabelText('No.', { selector: 'input' })).toHaveValue(
      '6e1a92c1-6ac3-43ce-8ef4-19b5938b1935',
    );
    expect(await screen.findByLabelText('Company name', { selector: 'input' })).toHaveValue('Von - Beier');
    expect(await screen.findByLabelText('Bank Account', { selector: 'input' })).toHaveValue('710479112921175505982856');
    expect(await screen.findByLabelText('Amount', { selector: 'input' })).toHaveValue(59);
  });

  it('should saved changed values', async () => {
    const { user } = renderWithInfrastructure(
      <Routes>
        <Route element={<EditInvoice />} path="/edit/:id" />
      </Routes>,

      { route: '/edit/6e1a92c1-6ac3-43ce-8ef4-19b5938b1935' },
    );

    const companyName = await screen.findByLabelText('Company name', { selector: 'input' });

    await user.type(companyName, ' changed');

    const button = await screen.findByTestId('save-button');
    await user.click(button);

    expect(await screen.findByText('Successfully saved :)')).toBeInTheDocument();
    expect(companyName).toHaveValue('Von - Beier changed');
  });

  it('should show error on save', async () => {
    server.use(http.put('/api/invoices/:id', () => HttpResponse.json({ error: 'error' }, { status: 500 })));

    const { user } = renderWithInfrastructure(
      <Routes>
        <Route element={<EditInvoice />} path="/edit/:id" />
      </Routes>,

      { route: '/edit/6e1a92c1-6ac3-43ce-8ef4-19b5938b1935' },
    );

    const companyName = await screen.findByLabelText('Company name', { selector: 'input' });

    await user.type(companyName, ' changed');

    const button = await screen.findByTestId('save-button');
    await user.click(button);

    expect(await screen.findByText('Error while saved :( Try Again ;)')).toBeInTheDocument();
  });
});
