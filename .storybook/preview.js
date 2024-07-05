import appConfig from '../public/config.json';
import configSchema from '../public/config.schema.json';
import '../src/index.scss';
import { setConfigs } from '../src/services/config';

setConfigs(appConfig, null, configSchema);

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
