import { AppBar, Toolbar, MenuItem, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import i18n from '../i18n';

export default function Layout() {
  const { t } = useTranslation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <MenuItem>
            <Link to="">
              <Button>
                <Typography color={'ButtonText'} textAlign="center">
                  Invoices
                </Typography>
              </Button>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="add">
              <Button>
                <Typography color={'ButtonText'} textAlign="center">
                  New Invoice
                </Typography>
              </Button>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Outlet />

      <div>
        <Button variant="contained" onClick={() => i18n.changeLanguage('en')}>
          en
        </Button>
        <Button variant="contained" onClick={() => i18n.changeLanguage('pl')}>
          pl
        </Button>
        <div>{t('Welcome to React')}</div>
      </div>
    </>
  );
}
