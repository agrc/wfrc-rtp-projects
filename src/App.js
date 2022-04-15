import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import React from 'react';
import './App.scss';
import config from './services/config';

function App() {
  React.useEffect(() => {
    const map = new Map({
      basemap: 'streets-vector',
    });
    new MapView({ map, container: 'mapDiv', ...config.DEFAULT_EXTENT });
  }, []);

  return <div id="mapDiv" className="w-100 h-100"></div>;
}

export default App;
