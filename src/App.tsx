import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

import InvoiceList from './components/InvoiceList';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import CreateInvoice from './components/Invoice/CreateInvoice';
import EditInvoice from './components/Invoice/EditInvoice';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '', element: <InvoiceList /> },
      { path: 'add', element: <CreateInvoice /> },
      { path: 'edit/:id', element: <EditInvoice /> },
    ],
  },
]);

function App() {
  const [queryClient] = React.useState(() => new QueryClient());
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
