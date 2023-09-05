import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

import InvoiceList from './components/InvoiceList';
import Invoice from './components/Invoice';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

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
  return <RouterProvider router={router} />;
}

export default App;
