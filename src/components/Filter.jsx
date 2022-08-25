import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { format } from 'sql-formatter';
import config from '../services/config';
import AdvancedControls from './AdvancedControls';
import './Filter.scss';
import InfoPopup from './InfoPopup';
import SimpleControls from './SimpleControls';
import { getLabelColor, useMapLayers } from './utils';

function ErrorFallback({ error }) {
  return <Alert color="danger">{error.message}</Alert>;
}
ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
};

export default function Filter({ mapView, state, dispatch }) {
  const [isAdvancedOpen, setIsAdvancedOpen] = React.useState(false);
  const headerRef = useRef();
  const toggleAdvanced = () => {
    if (isAdvancedOpen) {
      headerRef.current.scrollIntoView();
    }
    setIsAdvancedOpen((current) => !current);
  };

  const layers = useMapLayers(mapView, config.filter.layerNames);

  // toggle layers
  React.useEffect(() => {
    if (layers) {
      layers.modePoints.visible = state.display === config.MODE;
      layers.modeLines.visible = state.display === config.MODE;
      layers.phasePoints.visible = state.display === config.PHASE;
      layers.phaseLines.visible = state.display === config.PHASE;
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h5 ref={headerRef}>Display RTP Projects by</h5>
        <div className="d-flex justify-content-between align-items-center position-relative">
          <Nav tabs>
            <NavItem>
              <NavLink
                active={state.display === config.MODE}
                href="#"
                onClick={() => dispatch({ type: 'display', payload: config.MODE })}
              >
                Transportation Mode
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={state.display === config.PHASE}
                href="#"
                onClick={() => dispatch({ type: 'display', payload: config.PHASE })}
              >
                Phase Years
              </NavLink>
            </NavItem>
          </Nav>
          <InfoPopup
            content={
              state.display === config.MODE ? config.filter.infoText.simpleMode : config.filter.infoText.simplePhase
            }
            className="position-inherit"
          />
        </div>
        <TabContent activeTab={state.display} className="mt-2 px-1">
          <TabPane tabId={config.MODE}>
            <SimpleControls
              type={config.MODE}
              state={state}
              dispatch={dispatch}
              groups={[
                {
                  linear: layers?.modeLines,
                  point: layers?.modePoints,
                  value: config.filter.symbolValues.mode.road,
                  label: config.filter.labels.mode.road,
                },
                {
                  linear: layers?.modeLines,
                  point: layers?.modePoints,
                  value: config.filter.symbolValues.mode.transit,
                  label: config.filter.labels.mode.transit,
                },
                {
                  linear: layers?.modeLines,
                  point: layers?.modePoints,
                  value: config.filter.symbolValues.mode.activeTransportation,
                  label: config.filter.labels.mode.activeTransportation,
                },
              ]}
              disabled={!layers}
            />
            {!config.filter.disableAdvanced ? (
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
            ) : null}
          </TabPane>
          <TabPane tabId={config.PHASE}>
            <SimpleControls
              type={config.PHASE}
              state={state}
              dispatch={dispatch}
              groups={[
                {
                  linear: layers?.phaseLines,
                  point: layers?.phasePoints,
                  value: config.filter.symbolValues.phase.one,
                  label: config.filter.labels.phase.one,
                },
                {
                  linear: layers?.phaseLines,
                  point: layers?.phasePoints,
                  value: config.filter.symbolValues.phase.two,
                  label: config.filter.labels.phase.two,
                },
                {
                  linear: layers?.phaseLines,
                  point: layers?.phasePoints,
                  value: config.filter.symbolValues.phase.three,
                  label: config.filter.labels.phase.three,
                },
                {
                  linear: layers?.phaseLines,
                  point: layers?.phasePoints,
                  value: config.filter.symbolValues.phase.unfunded,
                  label: config.filter.labels.phase.unfunded,
                },
              ]}
              disabled={!layers}
              showPhaseFilter
            />
            {!config.filter.disableAdvanced ? (
              <AdvancedControls
                disabled={!layers}
                dispatch={dispatch}
                isOpen={isAdvancedOpen}
                state={state}
                toggle={toggleAdvanced}
              />
            ) : null}
          </TabPane>
        </TabContent>
      </ErrorBoundary>
    </>
  );
}

Filter.propTypes = {
  mapView: PropTypes.object,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
