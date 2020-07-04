import React, { ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

type HelloProps = { readonly name: string }

function Hello({ name }: HelloProps): ReactElement<HelloProps> {
  // The following patterns are not considered problems:
  return <Trans i18nKey="hello"><button>你好， {{name}}</button></Trans>
}

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The following patterns are considered problems:</p>
        <p>  
        測試
        </p>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello name={t('world')} />
      </header>
    </div>
  );
}

export default App;
