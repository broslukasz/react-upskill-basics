import { Snackbar } from '@mui/material';
import type { AlertProps } from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import { NotificationContext } from '../../App';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarSuccess = () => {
  const [open, setOpen] = React.useState(true);
  const { notification, setNotification } = React.useContext(NotificationContext);

  return (
    <Snackbar
      open={open}
      onClose={() => {
        setOpen(false);
        setNotification({ type: '', message: '' });
      }}
      autoHideDuration={3000}
      message="Invoice Saved :)"
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
};
