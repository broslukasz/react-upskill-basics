import { Snackbar } from '@mui/material';
import type { AlertProps } from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import type { AppSnackbarProps } from '../Models/SnackbarProps.interface';
import { useNotifications } from '../NotificationContext/NotificationContext';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarError = ({ message }: AppSnackbarProps) => {
  const [open, setOpen] = React.useState(true);
  const { setNotification } = useNotifications();

  return (
    <Snackbar
      open={open}
      onClose={() => {
        setOpen(false);
          if (setNotification) {
              setNotification({type: '', message: ''});
          }
      }}
      autoHideDuration={3000}
      message="message"
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        {message || 'This is an error :)'}
      </Alert>
    </Snackbar>
  );
};
