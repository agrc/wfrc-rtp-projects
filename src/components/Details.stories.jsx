import Graphic from '@arcgis/core/Graphic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import config from '../services/config';
import Details from './Details';

export default {
  component: Details,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

const graphic = new Graphic({
  aggregateGeometries: null,
  geometry: {
    type: 'point',
    spatialReference: {
      latestWkid: 3857,
      wkid: 102100,
    },
    x: -12433858.517092792,
    y: 4949756.203636566,
  },
  symbol: null,
  attributes: {
    OBJECTID: 1429,
    bike_type_text: null,
    breakout: 'State',
    improvement_type: 'Grade-Separated Crossing',
    mode: 'Highway',
    phase: 3,
    plan_id: 'R-S-216',
    [config.projectInformation.fieldNames.globalId]: 'R-S-216',
  },
  popupTemplate: {
    title: 'Test Title',
    content: 'Test Content',
  },
});

graphic.layer = { id: 'layer_id' };

export const Default = () => (
  <Details
    graphic={graphic}
    highlightGraphic={() => {}}
    urlState={{ selected_id: 1429, selected_layer_id: 'layer_id' }}
    setUrlState={() => {}}
    onlyOne={true}
  />
);
