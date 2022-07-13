import { useImmerReducer } from 'use-immer';
import { addOrRemove } from '../components/utils';
import config from './config';

export function getQuery(state, geometryType, projectConfig) {
  // phase is a numeric field
  const phaseQuery = `${state.phaseField} IN (${state.phase.join(',')})`;

  let query = `${phaseQuery}`;

  // project type queries
  const modeQueries = [];
  for (const mode of state.mode) {
    let modeQuery = `${projectConfig.filter.fieldNames.mode} = '${mode}'`;

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

    if (selectedProjectTypeInfos.length > 0) {
      const projectTypeOrQueries = [];
      const projectTypeAndQueries = [];
      for (const info of selectedProjectTypeInfos) {
        if (info[geometryType]) {
          if (info.useAnd) {
            projectTypeAndQueries.push(info[geometryType]);
          } else {
            projectTypeOrQueries.push(info[geometryType]);
          }
        }
      }

      if (projectTypeOrQueries.length > 0) {
        modeQuery += ` AND ((${projectTypeOrQueries.join(') OR (')}))`;
      }

      if (projectTypeAndQueries.length > 0) {
        modeQuery += ` AND (${projectTypeAndQueries.join(') AND (')})`;
      }
    }

    modeQueries.push(`(${modeQuery})`);
  }

  if (modeQueries.length > 0) {
    query += ` AND (${modeQueries.join(' OR ')})`;
  }

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

    case 'projectTypeHeader':
      if (action.payload) {
        // toggle all sub project types on
        draft.projectTypes[action.meta] = initialState.projectTypes[action.meta];
      } else {
        draft.projectTypes[action.meta] = [];
      }

      updateLayerDefinitions();

      break;

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

export default function useFilterReducer() {
  return useImmerReducer(reducer, initialState);
}
