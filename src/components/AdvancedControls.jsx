import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Button, Col, Collapse, Container, FormFeedback, Input, Label, Row } from 'reactstrap';
import config from '../services/config';
import Checkbox from './Checkbox';
import InfoPopup from './InfoPopup';
import LimitFacilityType from './LimitFacilityType';
import ProjectTypeHeader from './ProjectTypeHeader';
import UsePhasing from './UsePhasing';

const SELECT_ALL = 'select all';
const UNSELECT_ALL = 'unselect all';

export function getAll(selectedTypes, projectTypesConfig) {
  const possibilities = Object.keys(projectTypesConfig).map((key) => key);

  return possibilities.every((type) => selectedTypes.includes(type));
}

export default function AdvancedControls({ disabled, dispatch, isOpen, labelColors, showPhaseFilter, state, toggle }) {
  const getHeaderOperationLabel = (mode) => {
    return getAll(state.projectTypes[mode], config.filter.projectTypes[mode]) ? UNSELECT_ALL : SELECT_ALL;
  };

  const onHeaderClick = (mode) => {
    dispatch({ type: 'projectTypeHeader', payload: getHeaderOperationLabel(mode) === SELECT_ALL, meta: mode });
  };

  const getHandleCostChange =
    (costType) =>
    ({ value }) =>
      dispatch({ type: 'cost', payload: value, meta: costType });

  const costIsValid =
    !state.cost.min || !state.cost.max || parseInt(state.cost.max, 10) >= parseInt(state.cost.min, 10);

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
              <InfoPopup content={config.filter.infoText.projectType} className="me-2 position-absolute top-0 end-0" />
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
              {Object.keys(config.filter.projectTypes.road).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-road`}
                  label={name}
                  checked={state.projectTypes.road.includes(name)}
                  color={labelColors?.road}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'road' })}
                  disabled={disabled || !state.mode.includes(config.filter.symbolValues.mode.road)}
                />
              ))}
              <LimitFacilityType
                color={labelColors?.road}
                labels={config.filter.limitFacilityType.labels}
                onChange={(selected, type) =>
                  dispatch({ type: 'limitFacilityType', payload: { selected, type }, meta: 'road' })
                }
                selected={state.limitFacilityType.road.selected}
                type={state.limitFacilityType.road.type}
                values={config.filter.limitFacilityType.values}
              />
            </Col>
            <Col>
              <ProjectTypeHeader
                onClick={() => onHeaderClick('transit')}
                color={labelColors?.transit}
                operationLabel={getHeaderOperationLabel('transit')}
              >
                Transit
              </ProjectTypeHeader>
              {Object.keys(config.filter.projectTypes.transit).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-transit`}
                  label={name}
                  checked={state.projectTypes.transit.includes(name)}
                  color={labelColors?.transit}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'transit' })}
                  disabled={disabled || !state.mode.includes(config.filter.symbolValues.mode.transit)}
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
              {Object.keys(config.filter.projectTypes.activeTransportation)
                .slice(0, Math.ceil(Object.keys(config.filter.projectTypes.activeTransportation).length / 2))
                .map((name) => (
                  <Checkbox
                    key={name}
                    uniqueId={`${name}-activeTransportation`}
                    label={name}
                    checked={state.projectTypes.activeTransportation.includes(name)}
                    color={labelColors?.activeTransportation}
                    onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'activeTransportation' })}
                    disabled={disabled || !state.mode.includes(config.filter.symbolValues.mode.activeTransportation)}
                  />
                ))}
            </Col>
            <Col>
              {Object.keys(config.filter.projectTypes.activeTransportation)
                .slice(Math.ceil(Object.keys(config.filter.projectTypes.activeTransportation).length / 2))
                .map((name) => (
                  <Checkbox
                    key={name}
                    uniqueId={`${name}-activeTransportation`}
                    label={name}
                    checked={state.projectTypes.activeTransportation.includes(name)}
                    color={labelColors?.activeTransportation}
                    onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'activeTransportation' })}
                    disabled={disabled || !state.mode.includes(config.filter.symbolValues.mode.activeTransportation)}
                  />
                ))}
              <LimitFacilityType
                color={labelColors?.activeTransportation}
                labels={config.filter.limitFacilityType.labels}
                onChange={(selected, type) =>
                  dispatch({ type: 'limitFacilityType', payload: { selected, type }, meta: 'activeTransportation' })
                }
                selected={state.limitFacilityType.activeTransportation.selected}
                type={state.limitFacilityType.activeTransportation.type}
                values={config.filter.limitFacilityType.values}
              />
            </Col>
          </Row>
          {showPhaseFilter ? (
            <>
              <Row className="mt-2 position-relative">
                <Col>
                  <b>Filter By Phase Years:</b>
                </Col>
                <Col>
                  <InfoPopup
                    content={config.filter.infoText.phaseYears}
                    className="me-2 position-absolute top-0 end-0"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Checkbox
                    uniqueId="phase-1"
                    label={config.filter.labels.phase.one}
                    checked={state.phase.includes(config.filter.symbolValues.phase.one)}
                    onChange={() =>
                      dispatch({ type: 'simple', payload: config.filter.symbolValues.phase.one, meta: 'phase' })
                    }
                    disabled={disabled}
                  />
                  <Checkbox
                    uniqueId="phase-2"
                    label={config.filter.labels.phase.two}
                    checked={state.phase.includes(config.filter.symbolValues.phase.two)}
                    onChange={() =>
                      dispatch({ type: 'simple', payload: config.filter.symbolValues.phase.two, meta: 'phase' })
                    }
                    disabled={disabled}
                  />
                  <Checkbox
                    uniqueId="phase-3"
                    label={config.filter.labels.phase.three}
                    checked={state.phase.includes(config.filter.symbolValues.phase.three)}
                    onChange={() =>
                      dispatch({ type: 'simple', payload: config.filter.symbolValues.phase.three, meta: 'phase' })
                    }
                    disabled={disabled}
                  />
                  <Checkbox
                    uniqueId="phase-4"
                    label={config.filter.labels.phase.unfunded}
                    checked={state.phase.includes(config.filter.symbolValues.phase.unfunded)}
                    onChange={() =>
                      dispatch({ type: 'simple', payload: config.filter.symbolValues.phase.unfunded, meta: 'phase' })
                    }
                    disabled={disabled}
                  />
                </Col>
                {showPhaseFilter ? (
                  <Col>
                    <UsePhasing
                      phaseField={state.phaseField}
                      phaseLimit={state.phaseLimit}
                      phaseLimitEquals={state.phaseLimitEquals}
                      disabled={disabled}
                      dispatch={dispatch}
                    />
                  </Col>
                ) : null}
              </Row>
            </>
          ) : null}
          <Row className="mt-2 position-relative">
            <Col>
              <b>Filter By Project Cost (2023 dollars):</b>
              <InfoPopup content={config.filter.infoText.cost} className="me-2 position-absolute top-0 end-0" />
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
                invalid={!costIsValid}
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
                invalid={!costIsValid}
              />
              <FormFeedback>max should be greater than min</FormFeedback>
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
