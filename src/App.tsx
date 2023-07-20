import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import { AppBar, Toolbar, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';

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

      <Grid mt={2} container spacing={2} p={2}>
        <Grid item xs={6} container>
          {/* Czy da się innaczej niż width 100% ? */}
          <TextField sx={{ width: '100%' }} label="No." variant="standard" />
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
        <Grid item xs={6} container justifyContent="flex-end" alignItems="flex-start" gap={2}>
          <Button className="mr-2" variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
      </Grid>

      <div>
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
      </div>
    </>
  );
}

export default App;
