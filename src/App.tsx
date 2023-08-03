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

import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';
import InvoiceList from './components/Invoice-list';
import Invoice from './components/Invoice';

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

      <InvoiceList />

      <Invoice />

      {/* Pytanie: dlaczego jak daje m={2} dodaje mi poziomego scrolla */}
      <Grid container spacing={2} p={4} direction={'column'} mb={12}>
        <Grid
          item
          xs={6}
          container
          justifyContent="flex-end"
          alignItems="flex-start"
          gap={2}
          sx={{ height: 'fit-content' }}
        >
          {/* Kiedy to usuwam to pojawia się błąd w konsoli */}
          <Button variant="contained" startIcon={<SaveIcon />}>
            Send
          </Button>
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
