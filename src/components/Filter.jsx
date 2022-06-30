import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert, Button, Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { format } from 'sql-formatter';
import { useImmerReducer } from 'use-immer';
import config from '../services/config';
import AdvancedControls from './AdvancedControls';
import './Filter.scss';
import InfoPopup from './InfoPopup';
import SimpleControls from './SimpleControls';
import { addOrRemove, getLabelColor, useMapLayers } from './utils';

export function getQuery(state, geometryType, projectConfig) {
  // TODO: write some tests for this function

  // phase is a numeric field
  const phaseQuery = `${state.phaseField} IN (${state.phase.join(',')})`;
  // mode is a text field
  const modeQuery = `${projectConfig.fieldNames.mode} IN ('${state.mode.join("','")}')`;

  let query = `${phaseQuery} AND ${modeQuery}`;

  // project type queries
  const { road, transit, activeTransportation } = state.projectTypes;
  let selectedProjectTypeInfos = [];

  // only add project type queries if the corresponding project type is selected
  if (state.mode.includes(projectConfig.symbolValues.mode.road)) {
    selectedProjectTypeInfos.push(...road.map((name) => projectConfig.projectTypes.road[name]));
  }
  if (state.mode.includes(projectConfig.symbolValues.mode.transit)) {
    selectedProjectTypeInfos.push(...transit.map((name) => projectConfig.projectTypes.transit[name]));
  }
  if (state.mode.includes(projectConfig.symbolValues.mode.activeTransportation)) {
    selectedProjectTypeInfos.push(
      ...activeTransportation.map((name) => projectConfig.projectTypes.activeTransportation[name])
    );
  }

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
    query += ` AND ((${projectTypeOrQueries.join(') OR (')}))`;
  }
  if (projectTypeAndQueries.length > 0) {
    query += ` AND (${projectTypeAndQueries.join(') AND (')})`;
  }

  // cost queries
  const costQueries = [];
  if (state.cost?.min > 0) {
    costQueries.push(`${projectConfig.fieldNames.cost} >= ${state.cost.min}`);
  }
  if (state.cost?.max > 0) {
    costQueries.push(`${projectConfig.fieldNames.cost} <= ${state.cost.max}`);
  }

  if (costQueries.length > 0) {
    query += ` AND ${costQueries.join(' AND ')}`;
  }

  return query;
}

function reducer(draft, action) {
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
        draft.projectTypes[action.meta] = Object.keys(config.projectTypes[action.meta]);
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
}

const MODE = 'mode';
const PHASE = 'phase';
export const initialState = {
  display: MODE,
  mode: Object.values(config.symbolValues.mode),
  phase: Object.values(config.symbolValues.phase),
  projectTypes: {
    road: Object.keys(config.projectTypes.road).filter((key) => !config.projectTypes.road[key].offByDefault),
    transit: Object.keys(config.projectTypes.transit).filter((key) => !config.projectTypes.transit[key].offByDefault),
    activeTransportation: Object.keys(config.projectTypes.activeTransportation).filter(
      (key) => !config.projectTypes.activeTransportation[key].offByDefault
    ),
  },
  layerDefinitions: {
    modePoints: null,
    modeLines: null,
    phasePoints: null,
    phaseLines: null,
  },
  phaseField: config.fieldNames.phase,
  cost: {
    min: null,
    max: null,
  },
};

function ErrorFallback({ error }) {
  return <Alert color="danger">{error.message}</Alert>;
}
ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
};

export default function Filter({ mapView }) {
  const [isOpen, setIsOpen] = React.useState(true);
  const buttonDiv = React.useRef(null);
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const [isAdvancedOpen, setIsAdvancedOpen] = React.useState(true);
  const toggleAdvanced = () => setIsAdvancedOpen((current) => !current);

  const layers = useMapLayers(mapView, config.layerNames);

  const toggle = () => setIsOpen((current) => !current);

  React.useEffect(() => {
    if (mapView && buttonDiv.current) {
      mapView.ui.add(buttonDiv.current, 'top-left');
    }
  }, [mapView, buttonDiv]);

  // toggle layers
  React.useEffect(() => {
    if (layers) {
      layers.modePoints.visible = state.display === MODE;
      layers.modeLines.visible = state.display === MODE;
      layers.phasePoints.visible = state.display === PHASE;
      layers.phaseLines.visible = state.display === PHASE;
    }
  }, [layers, state.display]);

  // filter layers
  React.useEffect(() => {
    if (layers) {
      for (const layerKey of Object.keys(layers)) {
        const where = state.layerDefinitions[layerKey];
        layers[layerKey].filter = new FeatureFilter({
          where,
        });
        console.log(`${layers[layerKey].layer.title} filter updated to: \n${where ? format(where) : where}`);
      }
    }
  }, [layers, state.layerDefinitions]);

  // update phasing layers renderer
  React.useEffect(() => {
    if (layers) {
      layers.phasePoints.layer.renderer.field = state.phaseField;
      layers.phaseLines.layer.renderer.field = state.phaseField;
    }
  }, [layers, state.phaseField]);

  return (
    <>
      <div className="esri-widget--button" ref={buttonDiv} onClick={toggle} title="Toggle Filter">
        <FontAwesomeIcon icon={faList} />
      </div>
      <Card
        className={clsx('position-absolute', 'top-0', 'end-0', 'filter-card', 'me-3', 'mt-3', !isOpen && 'invisible')}
      >
        <CardHeader className="d-flex justify-content-between align-items-center">
          Filter
          <div className="d-flex align-items-center">
            <Button
              className="reset-button text-decoration-none"
              color="link"
              onClick={() => dispatch({ type: 'reset' })}
            >
              <small>reset</small>
            </Button>
            <Button close onClick={toggle} />
          </div>
        </CardHeader>
        <CardBody>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <h5>Display RTP Projects by</h5>
            <div className="d-flex justify-content-between align-items-center position-relative">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    active={state.display === MODE}
                    href="#"
                    onClick={() => dispatch({ type: 'display', payload: MODE })}
                  >
                    Transportation Mode
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={state.display === PHASE}
                    href="#"
                    onClick={() => dispatch({ type: 'display', payload: PHASE })}
                  >
                    Phase Years
                  </NavLink>
                </NavItem>
              </Nav>
              <InfoPopup
                content={state.display === MODE ? config.infoText.simpleMode : config.infoText.simplePhase}
                className="position-inherit"
              />
            </div>
            <TabContent activeTab={state.display} className="mt-2 px-1">
              <TabPane tabId={MODE}>
                <SimpleControls
                  type={MODE}
                  state={state}
                  dispatch={dispatch}
                  groups={[
                    {
                      linear: layers?.modeLines,
                      point: layers?.modePoints,
                      value: config.symbolValues.mode.road,
                      label: config.labels.mode.road,
                    },
                    {
                      linear: layers?.modeLines,
                      point: layers?.modePoints,
                      value: config.symbolValues.mode.transit,
                      label: config.labels.mode.transit,
                    },
                    {
                      linear: layers?.modeLines,
                      point: layers?.modePoints,
                      value: config.symbolValues.mode.activeTransportation,
                      label: config.labels.mode.activeTransportation,
                    },
                  ]}
                  disabled={!layers}
                />
                <AdvancedControls
                  disabled={!layers}
                  dispatch={dispatch}
                  isOpen={isAdvancedOpen}
                  labelColors={{
                    road: getLabelColor('road', layers?.modePoints),
                    transit: getLabelColor('transit', layers?.modePoints),
                    activeTransportation: getLabelColor('activeTransportation', layers?.modePoints),
                  }}
                  showPhaseFilter
                  state={state}
                  toggle={toggleAdvanced}
                />
              </TabPane>
              <TabPane tabId={PHASE}>
                <SimpleControls
                  type={PHASE}
                  state={state}
                  dispatch={dispatch}
                  groups={[
                    {
                      linear: layers?.phaseLines,
                      point: layers?.phasePoints,
                      value: config.symbolValues.phase.one,
                      label: config.labels.phase.one,
                    },
                    {
                      linear: layers?.phaseLines,
                      point: layers?.phasePoints,
                      value: config.symbolValues.phase.two,
                      label: config.labels.phase.two,
                    },
                    {
                      linear: layers?.phaseLines,
                      point: layers?.phasePoints,
                      value: config.symbolValues.phase.three,
                      label: config.labels.phase.three,
                    },
                    {
                      linear: layers?.phaseLines,
                      point: layers?.phasePoints,
                      value: config.symbolValues.phase.unfunded,
                      label: config.labels.phase.unfunded,
                    },
                  ]}
                  disabled={!layers}
                  phaseField={state.phaseField}
                />
                <AdvancedControls
                  disabled={!layers}
                  dispatch={dispatch}
                  isOpen={isAdvancedOpen}
                  state={state}
                  toggle={toggleAdvanced}
                />
              </TabPane>
            </TabContent>
          </ErrorBoundary>
        </CardBody>
      </Card>
    </>
  );
}

Filter.propTypes = {
  mapView: PropTypes.object,
};
