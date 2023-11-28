import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

import InvoiceList from './components/InvoiceList';
import Invoice from './components/Invoice';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '', element: <InvoiceList /> },
      { path: 'add', element: <Invoice /> },
      { path: 'edit/:id', element: <Invoice /> },
    ],
  },
]);

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  fetch('http://localhost:4000/api/invoices');
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <RouterProvider router={router} />
        <ReactQueryDevtools></ReactQueryDevtools>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;
