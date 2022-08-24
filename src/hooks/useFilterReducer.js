import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import { JsonParam, useQueryParams, withDefault } from 'use-query-params';
import { addOrRemove } from '../components/utils';
import config from '../services/config';

export function getQuery(state, geometryType, projectConfig) {
  // phase is a numeric field
  const phaseQuery = `${state.phaseField} IN (${state.phase.join(',')})`;

  let query = `${phaseQuery}`;

  // project type queries
  const modeQueries = [];
  for (const mode of Object.values(projectConfig.filter.symbolValues.mode)) {
    // find project types that are associated with this mode
    const { road, transit, activeTransportation } = state.projectTypes;

    let selectedProjectTypeInfos = [];
    if (mode == projectConfig.filter.symbolValues.mode.road) {
      selectedProjectTypeInfos = road.map((name) => projectConfig.filter.projectTypes.road[name]);
    } else if (mode == projectConfig.filter.symbolValues.mode.transit) {
      selectedProjectTypeInfos = transit.map((name) => projectConfig.filter.projectTypes.transit[name]);
    } else if (mode == projectConfig.filter.symbolValues.mode.activeTransportation) {
      selectedProjectTypeInfos = activeTransportation.map(
        (name) => projectConfig.filter.projectTypes.activeTransportation[name]
      );
    }

    let modeQuery = `${projectConfig.filter.fieldNames.mode} = '${mode}'`;
    const projectTypeOrQueries = [];
    const projectTypeAndQueries = [];
    if (state.mode.includes(mode) && selectedProjectTypeInfos.length > 0) {
      for (const info of selectedProjectTypeInfos) {
        if (info.useAnd) {
          projectTypeAndQueries.push(info[geometryType]);
        } else {
          projectTypeOrQueries.push(info[geometryType] ?? '1=2');
        }
      }

      if (projectTypeOrQueries.length > 0) {
        modeQuery += ` AND ((${projectTypeOrQueries.join(') OR (')}))`;

        if (projectTypeAndQueries.length > 0) {
          modeQuery += ` AND (${projectTypeAndQueries.join(') AND (')})`;
        }
      }
    }

    if (projectTypeOrQueries.length === 0) {
      // nothing is selected, turn off this mode
      modeQuery = modeQuery.replace('=', '!=');
    }

    modeQueries.push(`(${modeQuery})`);
  }

  query += ` AND (${modeQueries.join(' OR ')})`;

  // cost queries
  const costQueries = [];
  if (state.cost?.min > 0) {
    costQueries.push(`${projectConfig.filter.fieldNames.cost} >= ${state.cost.min}`);
  }
  if (state.cost?.max > 0) {
    costQueries.push(`${projectConfig.filter.fieldNames.cost} <= ${state.cost.max}`);
  }

  if (costQueries.length > 0) {
    query += ` AND ${costQueries.join(' AND ')}`;
  }

  return query;
}

export function reducer(draft, action) {
  const updateLayerDefinitions = () => {
    const pointsQuery = getQuery(draft, 'points', config);
    const linesQuery = getQuery(draft, 'lines', config);
    draft.layerDefinitions.modePoints = pointsQuery;
    draft.layerDefinitions.modeLines = linesQuery;
    draft.layerDefinitions.phasePoints = pointsQuery;
    draft.layerDefinitions.phaseLines = linesQuery;
  };

  switch (action.type) {
    case 'display':
      draft.display = action.payload;

      break;

    case 'simple':
      console.log('action', action);
      draft[action.meta] = addOrRemove(draft[action.meta], action.payload);

      updateLayerDefinitions();

      break;

    case 'projectType':
      draft.projectTypes[action.meta] = addOrRemove(draft.projectTypes[action.meta], action.payload);

      updateLayerDefinitions();

      break;

    case 'projectTypeHeader': {
      const newTypes = Array.from(draft.projectTypes[action.meta]);

      if (action.payload) {
        // toggle all sub project types on
        for (const name in config.filter.projectTypes[action.meta]) {
          if (!config.filter.projectTypes[action.meta][name].offByDefault && !newTypes.includes(name)) {
            newTypes.push(name);
          }
        }
      } else {
        // toggle off
        for (const name of draft.projectTypes[action.meta]) {
          if (!config.filter.projectTypes[action.meta][name].offByDefault) {
            newTypes.splice(newTypes.indexOf(name), 1);
          }
        }
      }
      draft.projectTypes[action.meta] = newTypes;

      updateLayerDefinitions();

      break;
    }

    case 'usePhasing':
      draft.phaseField = action.payload;

      updateLayerDefinitions();

      break;

    case 'cost':
      draft.cost[action.meta] = action.payload;

      updateLayerDefinitions();

      break;

    case 'reset':
      return initialState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  return draft;
}

export const initialState = {
  display: config.MODE,
  mode: Object.values(config.filter.symbolValues.mode),
  phase: Object.values(config.filter.symbolValues.phase),
  projectTypes: {
    road: Object.keys(config.filter.projectTypes.road).filter(
      (key) => !config.filter.projectTypes.road[key].offByDefault
    ),
    transit: Object.keys(config.filter.projectTypes.transit).filter(
      (key) => !config.filter.projectTypes.transit[key].offByDefault
    ),
    activeTransportation: Object.keys(config.filter.projectTypes.activeTransportation).filter(
      (key) => !config.filter.projectTypes.activeTransportation[key].offByDefault
    ),
  },
  layerDefinitions: {
    modePoints: null,
    modeLines: null,
    phasePoints: null,
    phaseLines: null,
  },
  phaseField: config.filter.fieldNames.phase,
  cost: {
    min: null,
    max: null,
  },
};

// I'm passing in each filter prop as a separate param to try
// and cut down on the length of the URL

const queryParams = {};
for (const key in initialState) {
  queryParams[key] = withDefault(JsonParam, initialState[key]);
}
export default function useFilterReducer() {
  const [urlState, setUrlState] = useQueryParams(queryParams, {
    removeDefaultsFromUrl: true,
  });
  const [state, dispatch] = useImmerReducer(
    reducer,
    urlState && Object.keys(urlState).length === Object.keys(initialState).length ? urlState : initialState
  );

  useEffect(() => {
    setUrlState(state);
    console.log(`url length: ${document.location.href.length}`);
  }, [setUrlState, state]);

  return [state, dispatch];
}
