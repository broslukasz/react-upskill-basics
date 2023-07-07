import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
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
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
