import { Snackbar } from '@mui/material';

export const SnackbarSuccess = () => {
  return <Snackbar open={true} autoHideDuration={6000} message="Success!!" />;
};
