import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Validator } from 'jsonschema';
import { initReactI18next } from 'react-i18next';

const config = {
  MODE: 'mode',
  PHASE: 'phase',
};

// optional configSchema is for vitest and storybook since they are clumsy when it comes to
// async setup
export const setConfigs = async (appConfigs, aboutContent, configSchema = null) => {
  // we are fetching this rather than importing it so that it can be hosted publicly and available
  // for WFRC to reference it in their config files
  if (!configSchema) {
    console.log('fetching config schema');
    const response = await fetch('config.schema.json');
    configSchema = await response.json();
  }

  // validate json format
  const validator = new Validator();

  try {
    validator.validate(appConfigs, configSchema, { throwError: true });
  } catch (error) {
    console.error('There is an error in config.json!', error.stack);
  }

  appConfigs.aboutContent = aboutContent;

  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      detection: {
        order: ['navigator'], // only look at the navigator object to determine locale
        caches: [], // disable locale caching
      },
      resources: appConfigs.translations,
      interpolation: {
        escapeValue: false,
      },
      fallbackLng: 'en',
    });

  // apply quad word from env
  Object.assign(config, appConfigs);
  console.log('configs set');
};

export default config;
