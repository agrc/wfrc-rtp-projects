import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Button, Col, Collapse, Container, Input, Label, Row } from 'reactstrap';
import config from '../services/config';
import Checkbox from './Checkbox';
import InfoPopup from './InfoPopup';
import ProjectTypeHeader from './ProjectTypeHeader';
import UsePhasing from './UsePhasing';

const numPossibleProjectTypes = {
  road: Object.keys(config.projectTypes.road).length,
  transit: Object.keys(config.projectTypes.transit).length,
  activeTransportation: Object.keys(config.projectTypes.activeTransportation).length,
};

const SELECT_ALL = 'select all';
const UNSELECT_ALL = 'unselect all';
export default function AdvancedControls({ disabled, dispatch, isOpen, labelColors, showPhaseFilter, state, toggle }) {
  const getHeaderOperationLabel = (mode) => {
    return state.projectTypes[mode].length === numPossibleProjectTypes[mode] ? UNSELECT_ALL : SELECT_ALL;
  };

  const onHeaderClick = (mode) => {
    dispatch({ type: 'projectTypeHeader', payload: getHeaderOperationLabel(mode) === SELECT_ALL, meta: mode });
  };

  const getHandleCostChange =
    (costType) =>
    ({ value }) =>
      dispatch({ type: 'cost', payload: value, meta: costType });

  return (
    <>
      <div className="d-flex justify-content-center mt-2 mb-1">
        <Button onClick={toggle} size="sm" outline title="Advanced Filter" className="py-0">
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        </Button>
      </div>
      <Collapse isOpen={isOpen}>
        <Container fluid className="px-0">
          <Row className="position-relative">
            <Col>
              <b>Filter By Project Type:</b>
            </Col>
            <Col>
              <InfoPopup content={config.infoText.projectType} className="me-2 position-absolute top-0 end-0" />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <ProjectTypeHeader
                onClick={() => onHeaderClick('road')}
                color={labelColors?.road}
                operationLabel={getHeaderOperationLabel('road')}
              >
                Road
              </ProjectTypeHeader>
              {Object.keys(config.projectTypes.road).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-road`}
                  label={name}
                  checked={state.projectTypes.road.includes(name)}
                  color={labelColors?.road}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'road' })}
                  disabled={disabled || !state.mode.includes(config.symbolValues.mode.road)}
                />
              ))}
            </Col>
            <Col>
              <ProjectTypeHeader
                onClick={() => onHeaderClick('transit')}
                color={labelColors?.transit}
                operationLabel={getHeaderOperationLabel('transit')}
              >
                Transit
              </ProjectTypeHeader>
              {Object.keys(config.projectTypes.transit).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-transit`}
                  label={name}
                  checked={state.projectTypes.transit.includes(name)}
                  color={labelColors?.transit}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'transit' })}
                  disabled={disabled || !state.mode.includes(config.symbolValues.mode.transit)}
                />
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectTypeHeader
                onClick={() => onHeaderClick('activeTransportation')}
                color={labelColors?.activeTransportation}
                operationLabel={getHeaderOperationLabel('activeTransportation')}
              >
                Active Transportation
              </ProjectTypeHeader>
            </Col>
          </Row>
          <Row>
            <Col>
              {Object.keys(config.projectTypes.activeTransportation)
                .slice(0, Object.keys(config.projectTypes.activeTransportation).length / 2)
                .map((name) => (
                  <Checkbox
                    key={name}
                    uniqueId={`${name}-activeTransportation`}
                    label={name}
                    checked={state.projectTypes.activeTransportation.includes(name)}
                    color={labelColors?.activeTransportation}
                    onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'activeTransportation' })}
                    disabled={disabled || !state.mode.includes(config.symbolValues.mode.activeTransportation)}
                  />
                ))}
            </Col>
            <Col>
              {Object.keys(config.projectTypes.activeTransportation)
                .slice(Object.keys(config.projectTypes.activeTransportation).length / 2)
                .map((name) => (
                  <Checkbox
                    key={name}
                    uniqueId={`${name}-activeTransportation`}
                    label={name}
                    checked={state.projectTypes.activeTransportation.includes(name)}
                    color={labelColors?.activeTransportation}
                    onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'activeTransportation' })}
                    disabled={disabled || !state.mode.includes(config.symbolValues.mode.activeTransportation)}
                  />
                ))}
            </Col>
          </Row>
          {showPhaseFilter ? (
            <>
              <Row className="mt-2 position-relative">
                <Col>
                  <b>Filter By Phase Years:</b>
                </Col>
                <Col>
                  <InfoPopup content={config.infoText.phaseYears} className="me-2 position-absolute top-0 end-0" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Checkbox
                    uniqueId="phase-1"
                    label={config.labels.phase.one}
                    checked={state.phase.includes(config.symbolValues.phase.one)}
                    onChange={() => dispatch({ type: 'simple', payload: config.symbolValues.phase.one, meta: 'phase' })}
                    disabled={disabled}
                  />
                  <Checkbox
                    uniqueId="phase-2"
                    label={config.labels.phase.two}
                    checked={state.phase.includes(config.symbolValues.phase.two)}
                    onChange={() => dispatch({ type: 'simple', payload: config.symbolValues.phase.two, meta: 'phase' })}
                    disabled={disabled}
                  />
                  <Checkbox
                    uniqueId="phase-3"
                    label={config.labels.phase.three}
                    checked={state.phase.includes(config.symbolValues.phase.three)}
                    onChange={() =>
                      dispatch({ type: 'simple', payload: config.symbolValues.phase.three, meta: 'phase' })
                    }
                    disabled={disabled}
                  />
                  <Checkbox
                    uniqueId="phase-4"
                    label={config.labels.phase.unfunded}
                    checked={state.phase.includes(config.symbolValues.phase.unfunded)}
                    onChange={() =>
                      dispatch({ type: 'simple', payload: config.symbolValues.phase.unfunded, meta: 'phase' })
                    }
                    disabled={disabled}
                  />
                </Col>
                {showPhaseFilter ? (
                  <Col>
                    <UsePhasing phaseField={state.phaseField} disabled={disabled} dispatch={dispatch} />
                  </Col>
                ) : null}
              </Row>
            </>
          ) : null}
          <Row className="mt-2 position-relative">
            <Col>
              <b>Filter By Project Cost (in millions, 2023 dollars):</b>
              <InfoPopup content={config.infoText.cost} className="me-2 position-absolute top-0 end-0" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Minimum</Label>
              <NumberFormat
                min="0"
                value={state.cost.min}
                displayType="input"
                customInput={Input}
                thousandSeparator
                prefix="$"
                className="mb-1"
                onValueChange={getHandleCostChange('min')}
              />
            </Col>
            <Col>
              <Label>Maximum</Label>
              <NumberFormat
                min="0"
                value={state.cost.max}
                displayType="input"
                customInput={Input}
                thousandSeparator
                prefix="$"
                className="mb-1"
                onValueChange={getHandleCostChange('max')}
              />
            </Col>
          </Row>
        </Container>
      </Collapse>
    </>
  );
}

AdvancedControls.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  labelColors: PropTypes.object,
  showPhaseFilter: PropTypes.bool,
  state: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};
