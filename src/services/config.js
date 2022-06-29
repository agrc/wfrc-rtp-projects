import { Validator } from 'jsonschema';

const config = {
  sherlock: {
    serviceUrl: 'https://gis.wfrc.org/arcgis/rest/services/General/ZoomToPlaceNames/FeatureServer/1',
    searchField: 'NAME',
  },
  layerNames: {
    modePoints: 'Points Displayed by Mode',
    modeLines: 'Lines Displayed by Mode',
    phasePoints: 'Points Displayed by Phase',
    phaseLines: 'Lines Displayed by Phase',
  },
  symbolValues: {
    mode: {
      road: 'Highway',
      transit: 'Transit',
      activeTransportation: 'Active Transportation',
    },
    phase: {
      one: '1',
      two: '2',
      three: '3',
      unfunded: '4',
    },
  },
  fieldNames: {
    phase: 'phase',
    phaseNeeded: 'phase_needed',
    mode: 'mode',
    cost: 'cost',
  },
  labels: {
    phase: {
      one: 'Phase 1 (2023-2032)',
      two: 'Phase 2 (2033-2042)',
      three: 'Phase 3 (2043-2050)',
      unfunded: 'Unfunded',
    },
    mode: {
      road: 'Road',
      transit: 'Transit',
      activeTransportation: 'Active Transportation',
    },
  },
  outFields: ['OBJECTID', 'phase', 'mode', 'improvement_type', 'plan_id', 'breakout', 'bike_type_text'],
};

// optional configSchema is for jest and storybook since they are clumsy when it comes to
// async setup
export const setConfigs = async (appConfigs, configSchema = null) => {
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

  // i18n
  //   .use(initReactI18next)
  //   .use(LanguageDetector)
  //   .init({
  //     detection: {
  //       order: ['navigator'], // only look at the navigator object to determine locale
  //       caches: [], // disable locale caching
  //     },
  //     resources: appConfigs.translations,
  //     interpolation: {
  //       escapeValue: false,
  //     },
  //     fallbackLng: 'en',
  //   });

  // apply quad word from env
  Object.assign(config, appConfigs);
};

export default config;
