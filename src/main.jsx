import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import ErrorFallback from './components/ErrorFallback';
import './index.scss';
import { setConfigs } from './services/config';

console.log('fetching config.json');

async function fetchConfig(resource, type) {
  const response = await fetch(resource);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${resource}`);
  }

  return type === 'json' ? response.json() : response.text();
}

let appConfig;
let aboutContent;
try {
  [appConfig, aboutContent] = await Promise.all([
    fetchConfig('config.json', 'json'),
    fetchConfig('about.html', 'text'),
  ]);
} catch (error) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ErrorFallback error={error} resetErrorBoundary={() => document.location.reload()} />
  );
}

await setConfigs(appConfig, aboutContent);

const { default: App } = await import('./App');

console.log('rendering app');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => document.location.reload()}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter} options={{ updateType: 'replaceIn' }}>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </QueryParamProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
