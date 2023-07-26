import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import { AppBar, Toolbar, MenuItem, Box, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Invoices
          </Typography>

          <MenuItem>
            <Typography textAlign="center">New Invoice</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>

      {/* Pytanie: dlaczego jak daje m={2} dodaje mi poziomego scrolla */}
      <Grid container spacing={2} p={4} direction={'column'} mb={12}>
        <Grid item container>
          <Grid item xs={6} container>
            <TextField fullWidth label="No." variant="standard" />
            <Grid item container spacing={2} pt={2}>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-end"
            alignItems="flex-start"
            gap={2}
            sx={{ height: 'fit-content' }}
          >
            <Button className="mr-2" variant="outlined">
              Cancel
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>

        <Grid item container textAlign={'left'} mt={2} spacing={4}>
          <Grid xs={6} item>
            <Typography variant="h4" component="p">
              Recipient
            </Typography>

            <Box mt={6}>
              <TextField id="recipient-company-name" label="Company name" variant="standard" fullWidth />
              <TextField id="recipient-city" label="City" variant="standard" fullWidth />
              <TextField id="recipient-street" label="Street" variant="standard" fullWidth />
              <TextField id="recipient-postcode" label="Postcode" variant="standard" fullWidth />
              <TextField id="recipient-nip" label="NIP" variant="standard" fullWidth />
              <TextField id="recipient-tel" label="Tel" variant="standard" fullWidth />
              <TextField id="recipient-email" label="E-mail" variant="standard" fullWidth />
              <TextField id="recipient-bank-account" label="Bank Account" variant="standard" fullWidth />
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Typography variant="h4" component="p">
              Sender
            </Typography>

            <Box mt={6}>
              {/* Pytanie Dlaczego czasem daje kursor na koniec */}
              <TextField id="sender-company-name" label="Company name" variant="standard" fullWidth />
              <TextField id="sender-city" label="City" variant="standard" fullWidth />
              <TextField id="sender-street" label="Street" variant="standard" fullWidth />
              <TextField id="sender-postcode" label="Postcode" variant="standard" fullWidth />
              <TextField id="sender-nip" label="NIP" variant="standard" fullWidth />
              <TextField id="sender-tel" label="Tel" variant="standard" fullWidth />
              <TextField id="sender-email" label="E-mail" variant="standard" fullWidth />
              <TextField id="sender-bank-account" label="Bank Account" variant="standard" fullWidth />
            </Box>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item container spacing={3}>
            <Grid item xs={6}>
              <TextField id="name" label="Name" variant="standard" fullWidth />
            </Grid>

            <Grid item xs={1.2}>
              <TextField type="number" id="amount" label="Amount" variant="standard" fullWidth />
            </Grid>

            <Grid item xs={1.2}>
              <TextField id="unit" label="Unit" variant="standard" fullWidth />
            </Grid>

            <Grid item xs={1.2}>
              <TextField type="number" id="tax" label="Tax" variant="standard" fullWidth />
            </Grid>

            <Grid item xs={1.2}>
              <TextField type="number" id="price" label="Price" variant="standard" fullWidth />
            </Grid>

            <Grid item container xs={1.2} alignItems={'center'} justifyContent={'center'}>
              {/* Pytanie: Jak zrobić autoimport do ikon */}
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <div>
        <div>
          <Button variant="contained" onClick={() => changeLanguage('en')}>
            en
          </Button>
          <Button variant="contained" onClick={() => changeLanguage('pl')}>
            pl
          </Button>
          <div>{t('Welcome to React')}</div>
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div> */}
    </>
  );
}

export default App;
