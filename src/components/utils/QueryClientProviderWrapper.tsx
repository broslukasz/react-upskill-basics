import { useState, type FC, type PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import NotificationProvider from '../NotificationProvider/NotificationProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const QueryClientProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { retry: false } } }));

  return (
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <BrowserRouter>{children}</BrowserRouter>
        </LocalizationProvider>
      </QueryClientProvider>
    </NotificationProvider>
  );
};
