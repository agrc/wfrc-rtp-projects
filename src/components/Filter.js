import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert, Button, Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useImmerReducer } from 'use-immer';
import config from '../services/config';
import AdvancedControls from './AdvancedControls';
import './Filter.scss';
import SimpleControls from './SimpleControls';
import { addOrRemove, getLabelColor, useMapLayers } from './utils';

export function getQuery(draft, geometryType) {
  let simpleQuery;
  if (draft.display === PHASE) {
    // phase is a numeric field
    simpleQuery = `${config.fieldNames[draft.display]} IN (${draft[draft.display].join(',')})`;
  } else {
    // mode is a text field
    simpleQuery = `${config.fieldNames[draft.display]} IN ('${draft[draft.display].join("','")}')`;
  }

  const { road, transit, activeTransportation } = draft.projectTypes[draft.display];
  const roadInfos = road.map((name) => config.projectTypes.road[name]);
  const transitInfos = transit.map((name) => config.projectTypes.transit[name]);
  const activeTransportationInfos = activeTransportation.map((name) => config.projectTypes.activeTransportation[name]);
  const selectedProjectTypeInfos = [...roadInfos, ...transitInfos, ...activeTransportationInfos];

  const projectTypeQueries = [];
  for (const info of selectedProjectTypeInfos) {
    if (info[geometryType]) {
      projectTypeQueries.push(info[geometryType]);
    }
  }

  if (projectTypeQueries.length > 0) {
    return `${simpleQuery} AND ((${projectTypeQueries.join(') OR (')}))`;
  }

  return simpleQuery;
}

function reducer(draft, action) {
  const updateLayerDefinitions = () => {
    draft.layerDefinitions[`${draft.display}Points`] = getQuery(draft, 'points');
    draft.layerDefinitions[`${draft.display}Lines`] = getQuery(draft, 'lines');
  };

  switch (action.type) {
    case 'display':
      draft.display = action.payload;

      break;

    case 'simple':
      draft[draft.display] = addOrRemove(draft[draft.display], action.payload);

      updateLayerDefinitions();

      break;

    case 'projectType':
      draft.projectTypes[draft.display][action.meta] = addOrRemove(
        draft.projectTypes[draft.display][action.meta],
        action.payload
      );

      updateLayerDefinitions();

      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const MODE = 'mode';
const PHASE = 'phase';
const initialState = {
  display: MODE,
  mode: Object.values(config.symbolValues.mode),
  phase: Object.values(config.symbolValues.phase),
  projectTypes: {
    [MODE]: {
      road: Object.keys(config.projectTypes.road),
      transit: Object.keys(config.projectTypes.transit),
      activeTransportation: Object.keys(config.projectTypes.activeTransportation),
    },
    [PHASE]: {
      road: Object.keys(config.projectTypes.road),
      transit: Object.keys(config.projectTypes.transit),
      activeTransportation: Object.keys(config.projectTypes.activeTransportation),
    },
  },
  layerDefinitions: {
    modePoints: null,
    modeLines: null,
    phasePoints: null,
    phaseLines: null,
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

  React.useEffect(() => {
    if (layers) {
      for (const layerKey of Object.keys(layers)) {
        layers[layerKey].filter = new FeatureFilter({
          where: state.layerDefinitions[layerKey],
        });
        console.log(`${layers[layerKey].layer.title} filter updated to: \n${state.layerDefinitions[layerKey]}`);
      }
    }
  }, [layers, state.layerDefinitions]);

  return (
    <>
      <div className="esri-widget--button" ref={buttonDiv} onClick={toggle} title="Toggle Filter">
        <FontAwesomeIcon icon={faList} />
      </div>
      <Card className={clsx('position-absolute', 'top-0', 'end-0', 'filter-card', 'me-3 mt-3', !isOpen && 'invisible')}>
        <CardHeader className="d-flex justify-content-between align-items-center">
          Filter
          <div className="d-flex align-items-center">
            <Button className="reset-button text-decoration-none" color="link" onClick={() => {}}>
              <small>reset</small>
            </Button>
            <Button close onClick={toggle} />
          </div>
        </CardHeader>
        <CardBody>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <h5>Display FTP Projects by</h5>
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
            <TabContent activeTab={state.display} className="mt-2">
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
                      label: 'Road',
                    },
                    {
                      linear: layers?.modeLines,
                      point: layers?.modePoints,
                      value: config.symbolValues.mode.transit,
                      label: 'Transit',
                    },
                    {
                      linear: layers?.modeLines,
                      point: layers?.modePoints,
                      value: config.symbolValues.mode.activeTransportation,
                      label: 'Active Transportation',
                    },
                  ]}
                  disabled={!layers}
                />
                <AdvancedControls
                  projectTypes={config.projectTypes}
                  selectedProjectTypes={state.projectTypes.mode}
                  dispatch={dispatch}
                  labelColors={{
                    road: getLabelColor('road', layers?.modePoints),
                    transit: getLabelColor('transit', layers?.modePoints),
                    activeTransportation: getLabelColor('activeTransportation', layers?.modePoints),
                  }}
                  disabled={!layers}
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
                      label: 'Phase 1 (2023-2030)',
                    },
                    {
                      linear: layers?.phaseLines,
                      point: layers?.phasePoints,
                      value: config.symbolValues.phase.two,
                      label: 'Phase 2 (2031-2040)',
                    },
                    {
                      linear: layers?.phaseLines,
                      point: layers?.phasePoints,
                      value: config.symbolValues.phase.three,
                      label: 'Phase 3 (2041-2050)',
                    },
                    {
                      linear: layers?.phaseLines,
                      point: layers?.phasePoints,
                      value: config.symbolValues.phase.unfunded,
                      label: 'Unfunded',
                    },
                  ]}
                  disabled={!layers}
                />
                <AdvancedControls
                  projectTypes={config.projectTypes}
                  selectedProjectTypes={state.projectTypes.phase}
                  state={state}
                  dispatch={dispatch}
                  disabled={!layers}
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
