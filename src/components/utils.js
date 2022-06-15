import { whenOnce } from '@arcgis/core/core/watchUtils';
import { useEffect, useState } from 'react';
import config from '../services/config';

// Cache layer lookup objects so that we don't have the crawl
// the same map multiple times and also to prevent any cached
// filters to become the defaultDefinitionExpression value for a layer.
const MAP_LAYERS = {};
export const getLayersInMap = async (map) => {
  const mapId = map.portalItem.id;
  if (MAP_LAYERS[mapId]) {
    return MAP_LAYERS[mapId];
  }

  const layerNameLookup = {};

  const getSublayers = (layer) => {
    layer.sublayers.forEach((subLayer) => {
      layerNameLookup[subLayer.title] = subLayer;

      if (subLayer.sublayers) {
        getSublayers(subLayer);
      }
    });
  };

  for (const layer of map.layers.items) {
    layerNameLookup[layer.title] = layer;

    await layer.when();
    layer.sublayers && getSublayers(layer);
  }

  Object.keys(layerNameLookup).forEach((layerName) => {
    const layer = layerNameLookup[layerName];
    layer.defaultDefinitionExpression = layer.definitionExpression || '1 = 1';
  });

  MAP_LAYERS[mapId] = layerNameLookup;

  return layerNameLookup;
};

export const getLayers = async (layerNames, mapView) => {
  const layerNameLookup = await getLayersInMap(mapView.map);

  const layers = {};

  for (const name of Object.keys(layerNames)) {
    const layer = layerNameLookup[layerNames[name]];

    if (!layer) {
      console.error(`Layer: ${layerNames[name]} not found in web map!`);
    }

    layer.outFields = config.outFields;

    layers[name] = await mapView.whenLayerView(layer);
  }

  return layers;
};

export const useMapLayers = (mapView, layerNames) => {
  const [layers, setLayers] = useState(null);

  // reset layer lookup when the web map is changed
  useEffect(() => {
    const getLayersForNewMap = async () => {
      console.log('getLayersForNewMap');
      await whenOnce(mapView, 'ready');

      const layers = await getLayers(layerNames, mapView);
      setLayers(layers);
    };

    if (mapView) {
      setLayers();
      getLayersForNewMap();
    }
  }, [layerNames, mapView]);

  return layers;
};

export const getLabelColor = (mode, layer) => {
  const symbol = getSymbol(layer, config.symbolValues.mode[mode]);

  return symbol ? symbol.color.toCss() : null;
};

export const getSymbol = (layer, value) => {
  if (!layer) {
    return null;
  }

  for (const info of layer.layer.renderer.uniqueValueInfos) {
    if (info.value === value) {
      return info.symbol;
    }
  }

  throw new Error(
    `Could not find symbol in layer: "${layer.layer.title}" for value: "${value}" in field: "${layer.layer.renderer.field}"!`
  );
};

export function addOrRemove(array, value) {
  if (array.includes(value)) {
    array.splice(array.indexOf(value), 1);
  } else {
    array.push(value);
  }

  return array;
}
