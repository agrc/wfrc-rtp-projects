import appConfig from '../public/config.json';
import configSchema from '../public/config.schema.json';
import '../src/App.scss';
import '../src/index.css';
import { setConfigs } from '../src/services/config';

setConfigs(appConfig, configSchema);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
