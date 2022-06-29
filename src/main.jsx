import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { setConfigs } from './services/config';

console.log('fetching config.json');
fetch('config.json')
  .then((response) => response.json())
  .then(async (appConfig) => {
    await setConfigs(appConfig);
    const { default: App } = await import('./App');

    console.log('rendering app');
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
