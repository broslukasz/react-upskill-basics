import * as React from 'react';
import { SnackbarSuccess } from '../Snackbars/SnackbarSuccess';
import { SnackbarError } from '../Snackbars/SnackbarError';

type NotificationContextType = {
  notification: { type: string; message: string };
  setNotification: React.Dispatch<React.SetStateAction<{ type: string; message: string }>>;
};

const NotificationContext = React.createContext<NotificationContextType>({
  notification: {
    type: '',
    message: '',
  },
  // Empty function es lint :( How to avoid
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNotification: () => {},
});

export const useNotificationContext = (): NotificationContextType => {
  const context = React.useContext(NotificationContext);

  if (context === undefined) {
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }

  return context;
};

export default function NotificationContextComponent(props: { children: any }) {
  const [notification, setNotification] = React.useState({ type: '', message: '' });

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {notification.type === 'success' && <SnackbarSuccess message={notification.message} />}
      {notification.type === 'error' && <SnackbarError message={notification.message} />}
      {props.children}
    </NotificationContext.Provider>
  );
}
