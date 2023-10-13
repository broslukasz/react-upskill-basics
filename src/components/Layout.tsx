import { AppBar, Toolbar, MenuItem, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { useCallback } from 'react';
import i18n from '../i18n';

export default function Layout() {
  const { t } = useTranslation();

  const changeLanguage = useCallback((lng: 'en' | 'pl') => {
    i18n.changeLanguage(lng)
      .catch(error => console.log('Change language failed:', error))
  }, [])

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <MenuItem>
            <Link to="">
              <Button>
                <Typography color={'ButtonText'} textAlign="center">Invoices</Typography>
              </Button>
            </Link>
          </MenuItem>


          <MenuItem>
            <Link to="add">
              <Button>
                <Typography color={'ButtonText'} textAlign="center">New Invoice</Typography>
              </Button>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Outlet />

      <div>
        <Button variant="contained" onClick={() => changeLanguage('en')}>
          en
        </Button>
        <Button variant="contained" onClick={() => changeLanguage('pl')}>
          pl
        </Button>
        <div>{t('Welcome to React')}</div>
      </div>
    </>
  );
}
