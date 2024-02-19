import { screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import { renderWithInfrastructure } from '../utils/render-with-router';
import { Route, Routes } from 'react-router-dom';
import InvoiceList from './InvoiceList';
import { server } from '../../../setupServer';
import { HttpResponse, http } from 'msw';

describe('Invoice List', () => {
  it('should have labels', async () => {
    renderWithInfrastructure(
      <Routes>
        <Route element={<InvoiceList />} path="/" />
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
    renderWithInfrastructure(
      <Routes>
        <Route element={<InvoiceList />} path="/" />
      </Routes>,

      { route: '/' },
    );

    expect((await screen.findAllByRole('row')).length).toBe(7);
  });

  it('should display error on api call failed', async () => {
    server.use(http.get('api/invoices', () => HttpResponse.json({ error: 'error' }, { status: 500 })));

    renderWithInfrastructure(
      <Routes>
        <Route element={<InvoiceList />} path="/" />
      </Routes>,
      { route: '/' },
    );

    expect(await screen.findByText('Invoice list fetch failed with status 500')).toBeInTheDocument();
  });
});
