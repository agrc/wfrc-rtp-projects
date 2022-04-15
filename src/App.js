import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import React from 'react';
import 'typeface-montserrat';
import './App.scss';
import Filter from './components/Filter';
import config from './services/config';

function App() {
  const [mapView, setMapView] = React.useState(null);

  React.useEffect(() => {
    const map = new Map({
      basemap: 'streets-vector',
    });
    setMapView(new MapView({ map, container: 'mapDiv', ...config.DEFAULT_EXTENT }));
  }, []);

  return (
    <div className="d-flex flex-column w-100 h-100">
      <div className="m-3 title">
        <h4 className="my-0">RTP Projects</h4>
      </div>
      <div id="mapDiv" className="flex-fill border-top border position-relative">
        <Filter mapView={mapView} />
      </div>
    </div>
  );
}

export default App;
