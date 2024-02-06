import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import EditInvoice from './EditInvoice';

describe('App', () => {
  it('shoule work', async () => {
    render(<EditInvoice />);
    expect(screen.getByText('Invoices')).toBeInTheDocument();
  });
});
