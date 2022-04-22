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
      1: 'Phase 1 (2023-2030)',
      2: 'Phase 2 (2031-2040)',
      3: 'Phase 3 (2041-2050)',
      unfunded: 'Unfunded',
    },
  },
};

export default config;
