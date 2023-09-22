import { AppBar, Toolbar, MenuItem, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import i18n from '../i18n';

export default function Layout() {
  const { t } = useTranslation();

  const changeLanguage = (lng: 'en' | 'pl') => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            <Link to="" color="black">
              Invoices
            </Link>
          </Typography>

          <MenuItem>
            <Typography textAlign="center">
              <Link to="add">New Invoice</Link>
            </Typography>
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
