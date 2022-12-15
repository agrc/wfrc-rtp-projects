import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import { whenOnce } from '@arcgis/core/core/reactiveUtils';
import Graphic from '@arcgis/core/Graphic';
import WebTileLayer from '@arcgis/core/layers/WebTileLayer';
import Viewpoint from '@arcgis/core/Viewpoint';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Home from '@arcgis/core/widgets/Home';
import { faFilter, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LayerSelector from '@ugrc/layer-selector';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'typeface-montserrat';
import { NumberParam, StringParam, useQueryParams } from 'use-query-params';
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
  const [layerSelectorOptions, setLayerSelectorOptions] = useState(null);
  const [urlState, setUrlState] = useQueryParams({
    x: NumberParam,
    y: NumberParam,
    scale: NumberParam,

    //🎗️ these configs need to be synced with Details.jsx
    selected_id: NumberParam,
    selected_layer_id: StringParam,
  });
  const mapInitialized = useRef(false);

  const t = useSpecialTranslation();

  // init map
  useEffect(() => {
    if (mapInitialized.current) return;

    const map = new WebMap({
      portalItem: { id: config.webMapId },
    });
    const mapOptions = { map, container: 'mapDiv' };

    if (urlState.x && urlState.y && urlState.scale) {
      mapOptions.center = { x: urlState.x, y: urlState.y, spatialReference: 3857 };
      mapOptions.scale = urlState.scale;
    } else {
      mapOptions.center = { x: config.defaultExtent.x, y: config.defaultExtent.y, spatialReference: 3857 };
      mapOptions.scale = config.defaultExtent.scale;
    }

    const view = new MapView(mapOptions);
    view.popup = null;
    view.ui.add(
      new Home({
        view,
        viewpoint: new Viewpoint({
          targetGeometry: {
            type: 'point',
            x: config.defaultExtent.x,
            y: config.defaultExtent.y,
            spatialReference: 3857,
          },
          scale: config.defaultExtent.scale,
        }),
      }),
      'top-left'
    );

    config.layerSelector.baseLayers = config.layerSelector.baseLayers.map((layer) => {
      if (typeof layer === 'string' && layer === config.layerSelector.BWName) {
        return {
          id: config.layerSelector.BWName,
          Factory: WebTileLayer,
          urlTemplate: `https://discover.agrc.utah.gov/login/path/${
            import.meta.env.VITE_DISCOVER
          }/tiles/utah/{level}/{col}/{row}`,
          effect: `grayscale(100%) opacity(${config.layerSelector.BWOpacity})`,
        };
      }

      return layer;
    });

    setLayerSelectorOptions({
      view,
      quadWord: import.meta.env.VITE_DISCOVER,
      position: 'top-left',
      showOpacitySlider: true,
      ...config.layerSelector,
    });

    setMapView(view);

    mapInitialized.current = true;
  }, [urlState.scale, urlState.x, urlState.y]);

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
        reactiveUtils
          .once(() => mapView.extent)
          .then(() => {
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
  const highlightGraphic = useCallback(
    async (newGraphic) => {
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
    },
    [graphic, highlight, mapView]
  );

  const initialSelectedGraphicLoaded = useRef(false);
  useEffect(() => {
    const selectGraphic = async () => {
      await mapView.map.when();

      const layer = mapView.map.findLayerById(urlState.selected_layer_id);
      const layerView = await mapView.whenLayerView(layer);
      await whenOnce(() => layerView.updating === false);

      const featureSet = await layerView.queryFeatures({
        where: `OBJECTID = ${urlState.selected_id}`,
      });

      setSelectedGraphics(featureSet.features);
    };

    if (!initialSelectedGraphicLoaded.current && mapView) {
      if (urlState.selected_id && urlState.selected_layer_id) {
        selectGraphic();
      }
      initialSelectedGraphicLoaded.current = true;
    }
  }, [urlState, mapView]);

  useEffect(() => {
    if (mapView) {
      mapView.on('click', async (event) => {
        const response = await mapView.hitTest(event);
        highlightGraphic();
        setUrlState({
          selected_id: null,
          selected_layer_id: null,
        });
        setSelectedGraphics(response.results.map((result) => result.graphic));

        if (response.results.length > 0) {
          setProjectInfoIsOpen(true);
        }
      });

      mapView.watch(
        'extent',
        debounce((newExtent) => {
          if (newExtent) {
            setUrlState({
              x: Math.round(newExtent.center.x),
              y: Math.round(newExtent.center.y),
              scale: Math.round(mapView.scale),
            });
          }
        }, 100)
      );
    }
  }, [highlightGraphic, mapView, setUrlState]);

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
          {layerSelectorOptions && <LayerSelector {...layerSelectorOptions} />}
        </div>
      </div>
      {config.splashScreen.enabled ? <SplashScreen /> : null}
    </QueryClientProvider>
  );
}

export default App;
