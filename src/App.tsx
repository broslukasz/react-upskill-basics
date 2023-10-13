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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </>);
}

export default App;
