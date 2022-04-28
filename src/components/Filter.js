import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert, Button, Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useImmerReducer } from 'use-immer';
import config from '../services/config';
import './Filter.scss';
import SimpleControls from './SimpleControls';
import { useMapLayers } from './utils';

function reducer(draft, action) {
  switch (action.type) {
    case 'display':
      draft.display = action.payload;
      break;

    case 'simple':
      if (draft[action.meta].includes(action.payload)) {
        draft[action.meta] = draft[action.meta].filter((mode) => mode !== action.payload);
      } else {
        draft[action.meta].push(action.payload);
      }
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

  // update definition queries
  React.useEffect(() => {
    if (layers) {
      const query = `${config.fieldNames.phase} IN ('${state.phase.join("','")}')`;
      layers.phasePoints.definitionExpression = query;
      layers.phaseLines.definitionExpression = query;
    }
  }, [layers, state.phase]);
  React.useEffect(() => {
    if (layers) {
      const query = `${config.fieldNames.mode} IN ('${state.mode.join("','")}')`;
      layers.modePoints.definitionExpression = query;
      layers.modeLines.definitionExpression = query;
    }
  }, [layers, state.mode]);

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
