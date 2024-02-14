import { useState, type FC, type PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import NotificationProvider from '../NotificationProvider/NotificationProvider';

export const QueryClientProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { retry: false } } }));

  return (
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </NotificationProvider>
  );
};
