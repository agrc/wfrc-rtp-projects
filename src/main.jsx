import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { setConfigs } from './services/config';

fetch('config.json')
  .then((response) => response.json())
  .then(async (appConfig) => {
    await setConfigs(appConfig);

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
