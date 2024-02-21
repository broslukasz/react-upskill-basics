import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import App from './App';

describe('App', () => {
  it('should work', async () => {
    render(<App />);
    expect(screen.getByText('Invoices')).toBeInTheDocument();
  });
});
