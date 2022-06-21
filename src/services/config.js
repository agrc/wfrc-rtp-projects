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
  projectTypes: {
    road: {
      'New Construction': {
        points: "improvement_type = 'New Interchange'",
        lines: "improvement_type LIKE 'New Construction%'",
      },
      'Lane Additions': {
        points: null,
        lines: "improvement_type LIKE 'Widening%' AND plan_id <> 'R-S-136'",
      },
      'HOT Lane Additions': {
        points: null,
        lines: "plan_id = 'R-S-136'",
      },
      Interchange: {
        points: "improvement_type = 'Upgrade Interchange'",
        lines: null,
      },
      Operational: {
        points: null,
        lines: "improvement_type = 'Operations' OR improvement_type = 'Re-striping'",
      },
      'Over/Underpass': {
        points: "improvement_type = 'Grade-Separated Crossing'",
        lines: null,
      },
      'Corridor Preservation': {
        points: null,
        lines: "improvement_type = 'Corridor Preservation' AND mode = 'Highway'",
      },
      'UDOT Owned Facility': {
        points: "breakout = 'State'",
        lines: "breakout = 'State'",
      },
      'Local Owned Facility': {
        points: "breakout = 'Local'",
        lines: "breakout = 'Local'",
      },
      'Mixed Ownership': {
        points: "breakout = 'State/Local'",
        lines: "breakout = 'State/Local'",
      },
    },
    transit: {
      'Commuter Rail': {
        points: null,
        lines: "improvement_type = 'Commuter Rail'",
      },
      'Light Rail': {
        points: null,
        lines: "improvement_type = 'Light Rail' OR improvement_type = 'Street Car'",
      },
      'Bus Rapid Transit': {
        points: null,
        lines: "improvement_type = 'Bus Rapid Transit'",
      },
      'Bus, Core Route': {
        points: null,
        lines: "improvement_type = 'Core Route'",
      },
      'Corridor Preservation': {
        points: null,
        lines: "improvement_type = 'Corridor Preservation' AND mode = 'Transit'",
      },
      'New Station': {
        points: "improvement_type = 'Station'",
        lines: null,
      },
      'Mobility Hub': {
        points: "improvement_type = 'Transit Hub'",
        lines: null,
      },
      'Park & Ride': {
        points: "improvement_type = 'Park & Ride'",
        lines: null,
      },
      'Maintenance Facility': {
        points: "improvement_type = 'Maintenance'",
        lines: null,
      },
    },
    activeTransportation: {
      'Multiuse Pathway': {
        points: null,
        lines: "bike_type_text = 'Parallel Bikeway Paved' OR bike_type_text = 'Parallel Bikeway Unpaved'",
      },
      'On-street, Protected': {
        points: null,
        lines: "bike_type_text = 'General Cycle Track'",
      },
      'On-street, Bike Lane': {
        points: null,
        lines: "bike_type_text = 'Bike Lane' OR bike_type_text = 'Buffered Bike Lane'",
      },
      'Signed Route/Sharrow': {
        points: null,
        lines:
          "bike_type_text = 'General Shared Roadway' OR bike_type_text = 'Marked Shared Roadway' OR bike_type_text = 'Shoulder Bikeway' OR bike_type_text = 'Unknown Category'",
      },
      'Over/Underpass (AT)': {
        points: "bike_type_text = 'Overpass' OR bike_type_text = 'Underpass'",
        lines: null,
      },
      'At-Grade Crossing': {
        points: "bike_type_text = 'At-Grade Crossing' OR bike_type_text = 'Crossing'",
        lines: null,
      },
    },
  },
};

// optional configSchema is for jest and storybook since they are clumsy when it comes to
// async setup
export const setConfigs = async (appConfigs, configSchema = null) => {
  // we are fetching this rather than importing it so that it can be hosted publicly and available
  // for WFRC to reference it in their config files
  if (!configSchema) {
    const response = await fetch('config.schema.json');
    configSchema = await response.json();
  }

  // validate json format
  const validator = new Validator();

  try {
    validator.validate(appConfigs, configSchema, { throwError: true });
  } catch (error) {
    console.error('There is an error in config.json!', error);
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
