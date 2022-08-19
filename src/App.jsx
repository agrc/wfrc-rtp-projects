import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import Graphic from '@arcgis/core/Graphic';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Home from '@arcgis/core/widgets/Home';
import { faFilter, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import 'typeface-montserrat';
import './App.scss';
import Filter from './components/Filter';
import MapWidget from './components/MapWidget';
import MapWidgetContainer from './components/MapWidgetContainer';
import MapWidgetResizeHandle from './components/MapWidgetResizeHandle';
import ProjectInformation from './components/ProjectInformation';
import { MapServiceProvider, Sherlock } from './components/Sherlock';
import SplashScreen from './components/SplashScreen';
import useFilterReducer from './hooks/useFilterReducer';
import config from './services/config';
import { useSpecialTranslation } from './services/i18n';

const queryClient = new QueryClient();

function App() {
  const [mapView, setMapView] = useState(null);
  const [zoomToGraphic, setZoomToGraphic] = useState(null);

  const t = useSpecialTranslation();

  useEffect(() => {
    const map = new WebMap({
      portalItem: { id: config.webMapId },
    });
    const view = new MapView({ map, container: 'mapDiv' });
    view.popup = null;
    view.ui.add(new Home({ view }), 'top-left');

    setMapView(view);
  }, []);

  const [displayedZoomGraphic, setDisplayedZoomGraphic] = useState(null);
  const zoomTo = useCallback(
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

  useEffect(() => {
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
    placeHolder: t(config.sherlock.placeHolder),
    onSherlockMatch,
  };

  // required for ProjectInformation
  const [selectedGraphics, setSelectedGraphics] = useState([]);
  const [highlight, setHighlight] = useState(null);
  const [graphic, setGraphic] = useState(null);
  const highlightGraphic = async (newGraphic) => {
    console.log('App:highlightGraphic', newGraphic);

    if (highlight) {
      highlight.remove();
      setHighlight(null);
    }

    if (graphic) {
      mapView.graphics.remove(graphic);
    }

    if (newGraphic) {
      try {
        const layerView = await mapView.whenLayerView(newGraphic.layer);
        setHighlight(layerView.highlight(newGraphic));
      } catch {
        const symbolizedGraphic = new Graphic({
          ...newGraphic,
          symbol: config.SELECTION_SYMBOLS[newGraphic.geometry.type],
        });

        mapView.graphics.add(symbolizedGraphic);
        setGraphic(symbolizedGraphic);
      }
    } else {
      setGraphic(null);
    }
  };

  useEffect(() => {
    if (mapView) {
      mapView.on('click', async (event) => {
        const response = await mapView.hitTest(event);
        setSelectedGraphics(response.results.map((result) => result.graphic));

        if (response.results.length > 0) {
          setProjectInfoIsOpen(true);
        }
      });
    }
  }, [mapView]);

  const [filterState, filterDispatch] = useFilterReducer();
  const [filterIsOpen, setFilterIsOpen] = useState(config.openOnLoad.filter);
  const [projectInfoIsOpen, setProjectInfoIsOpen] = useState(config.openOnLoad.projectInfo);
  const [resize, setResize] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="d-flex flex-column w-100 h-100">
        <div className="m-3 title">
          <h4 className="my-0">{config.appTitle}</h4>
        </div>
        <div id="mapDiv" className="flex-fill border-top border position-relative">
          <MapWidgetContainer openStates={[filterIsOpen, projectInfoIsOpen]}>
            <MapWidget
              defaultOpen={config.openOnLoad.filter}
              isOpen={filterIsOpen}
              name={t('trans:filter')}
              icon={faFilter}
              position={0}
              mapView={mapView}
              showReset={true}
              onReset={() => filterDispatch({ type: 'reset' })}
              toggle={() => setFilterIsOpen((current) => !current)}
              resize={resize}
              isAlone={filterIsOpen && !projectInfoIsOpen}
            >
              <Filter mapView={mapView} state={filterState} dispatch={filterDispatch} />
            </MapWidget>
            <MapWidgetResizeHandle onResize={setResize} show={filterIsOpen && projectInfoIsOpen} />
            <MapWidget
              defaultOpen={config.openOnLoad.projectInfo}
              isOpen={projectInfoIsOpen}
              name={t('trans:projectInformation')}
              icon={faHandPointer}
              position={1}
              mapView={mapView}
              toggle={() => setProjectInfoIsOpen((current) => !current)}
              resize={resize}
              isAlone={!filterIsOpen && projectInfoIsOpen}
            >
              <ProjectInformation graphics={selectedGraphics} highlightGraphic={highlightGraphic} />
            </MapWidget>
          </MapWidgetContainer>
          <Sherlock {...sherlockConfig}></Sherlock>
        </div>
      </div>
      <SplashScreen />
    </QueryClientProvider>
  );
}

export default App;
