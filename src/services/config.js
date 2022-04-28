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
    phase: 'Phase',
    mode: 'Mode',
  },
};

export default config;
