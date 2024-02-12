import { screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import EditInvoice from './EditInvoice';
import { renderWithRouter } from '../utils/render-with-router';

describe('Edit Invoice', () => {
  it('should work', async () => {
    renderWithRouter(<EditInvoice />, { route: 'api/invoices/123' });
    expect(screen.getByText(/no match/i)).not.toBeInTheDocument();
  });
});
