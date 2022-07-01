import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Home from '@arcgis/core/widgets/Home';
import React from 'react';
import 'typeface-montserrat';
import './App.scss';
import Filter from './components/Filter';
import { MapServiceProvider, Sherlock } from './components/Sherlock';
import config from './services/config';

function App() {
  const [mapView, setMapView] = React.useState(null);
  const [zoomToGraphic, setZoomToGraphic] = React.useState(null);

  React.useEffect(() => {
    const map = new WebMap({
      portalItem: { id: '64597762025546ca993bea496f51d302' },
    });
    const view = new MapView({ map, container: 'mapDiv' });
    view.ui.add(new Home({ view }), 'top-left');

    setMapView(view);
  }, []);

  const [displayedZoomGraphic, setDisplayedZoomGraphic] = React.useState(null);
  const zoomTo = React.useCallback(
    async (zoomObj) => {
      if (!Array.isArray(zoomObj.target)) {
        zoomObj.target = [zoomObj.target];
      }

      if (!zoomObj.zoom) {
        if (zoomObj.target.every((graphic) => graphic.geometry.type === 'point')) {
          zoomObj = {
            target: zoomObj.target,
            zoom: 10,
          };
        } else {
          zoomObj = {
            target: zoomObj.target,
          };
        }
      }

      await mapView.goTo(zoomObj);

      if (displayedZoomGraphic) {
        mapView.graphics.removeMany(displayedZoomGraphic);
      }

      setDisplayedZoomGraphic(zoomObj.target);

      mapView.graphics.addMany(zoomObj.target);

      if (!zoomObj.preserve) {
        reactiveUtils.once(mapView, 'extent', () => {
          mapView.graphics.removeAll();
        });
      }
    },
    [displayedZoomGraphic, mapView]
  );

  React.useEffect(() => {
    if (zoomToGraphic) {
      const { graphic, level, preserve } = zoomToGraphic;

      graphic &&
        zoomTo({
          target: graphic,
          zoom: level,
          preserve: preserve,
        });
    }
  }, [zoomToGraphic, mapView, zoomTo]);

  const onSherlockMatch = (graphics) => {
    setZoomToGraphic({
      graphic: graphics,
      preserve: false,
    });
  };

  const sherlockConfig = {
    provider: new MapServiceProvider(config.sherlock.serviceUrl, config.sherlock.searchField),
    placeHolder: 'Search...',
    onSherlockMatch,
  };

  return (
    <div className="d-flex flex-column w-100 h-100">
      <div className="m-3 title">
        <h4 className="my-0">RTP Projects</h4>
      </div>
      <div id="mapDiv" className="flex-fill border-top border position-relative">
        <Filter mapView={mapView} />
        <Sherlock {...sherlockConfig}></Sherlock>
      </div>
    </div>
  );
}

export default App;
