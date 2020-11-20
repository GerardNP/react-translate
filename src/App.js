import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import React, { Suspense } from 'react';


function Foo() {
  const { t, i18n } = useTranslation(['global']);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { t('message') }
        </p>
        <p>
        { t('language') } : { i18n.language }
          </p>
          <button onClick={ () => i18n.changeLanguage("es") }>ES</button>
          <button onClick={ () => i18n.changeLanguage("en") }>EN</button>
      </header>
    </div>
  );
}

function App() {

  return (
      <Suspense fallback="cargando...">
        <Foo />
    </Suspense>
  );
}

export default App;
