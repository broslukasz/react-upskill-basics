import { Snackbar } from '@mui/material';
import type { AlertProps } from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import type { AppSnackbarProps } from '../Models/SnackbarProps.interface';
import { useNotifications } from '../NotificationProvider/NotificationProvider';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarSuccess = ({ message }: AppSnackbarProps) => {
  const { notification, setNotification } = useNotifications();

  return (
    <Snackbar
      open={notification.type === 'success'}
      onClose={() => {
        setNotification({ type: '', message: '' });
      }}
      autoHideDuration={3000}
      message="message"
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
