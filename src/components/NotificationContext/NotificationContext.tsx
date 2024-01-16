import * as React from 'react';
import { SnackbarSuccess } from '../Snackbars/SnackbarSuccess';
import { SnackbarError } from '../Snackbars/SnackbarError';

type NotificationContextType = {
  notification: { type: string; message: string };
  setNotification: React.Dispatch<React.SetStateAction<{ type: string; message: string }>> | undefined;
};

const NotificationContext = React.createContext<NotificationContextType>({
  notification: {
    type: '',
    message: '',
  },
  setNotification: undefined,
});

export const useNotifications = (): NotificationContextType => {
  const context = React.useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }

  return context;
};

// ToDo type childrenn
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
