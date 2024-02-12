import { screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import { renderWithRouter } from '../utils/render-with-router';
import { Route, Routes } from 'react-router-dom';
import InvoiceList from './InvoiceList';
import { server } from '../../../setupServer';
import { HttpResponse, http } from 'msw';

describe('Invoice List', () => {
  it('should have labels', async () => {
    renderWithRouter(
      <Routes>
        <Route element=<InvoiceList /> path="/" />
      </Routes>,

      { route: '/' },
    );

    expect(screen.getByText('No.')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Valid Until')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('should match items number', async () => {
    renderWithRouter(
      <Routes>
        <Route element=<InvoiceList /> path="/" />
      </Routes>,

      { route: '/' },
    );

    expect((await screen.findAllByTestId('id')).length).toBe(7);
  });

  // ToDo it does not trigger error :(
  it('should display error on api call failed', async () => {
    server.use(http.get('/api/invoices', () => HttpResponse.json({ error: 'error' })));

    renderWithRouter(
      <Routes>
        <Route element=<InvoiceList /> path="/" />
      </Routes>,

      { route: '/' },
    );

    expect(await screen.findByText('Request fetch failed with status')).toBeInTheDocument();
  });
});
