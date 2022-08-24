import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import ErrorFallback from './components/ErrorFallback';
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
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => document.location.reload()}>
          <BrowserRouter>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
              <Routes>
                <Route path="/" element={<App />} />
              </Routes>
            </QueryParamProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </React.StrictMode>
    );
  });
