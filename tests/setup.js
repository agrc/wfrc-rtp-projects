import appConfig from '../public/config.json';
import configSchema from '../public/config.schema.json';

import { setConfigs } from '../src/services/config';

setConfigs(appConfig, configSchema);
