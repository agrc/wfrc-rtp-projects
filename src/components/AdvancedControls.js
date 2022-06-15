import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Collapse, Container, Row } from 'reactstrap';
import config from '../services/config';
import Checkbox from './Checkbox';

const numPossibleProjectTypes = {
  road: Object.keys(config.projectTypes.road).length,
  transit: Object.keys(config.projectTypes.transit).length,
  activeTransportation: Object.keys(config.projectTypes.activeTransportation).length,
};

export default function AdvancedControls({
  projectTypes,
  labelColors,
  dispatch,
  selectedProjectTypes,
  disabled,
  showProjectTypeHeaders = false,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((current) => !current);

  const getHeaderChecked = (mode) => {
    const selectedTypesForMode = selectedProjectTypes[mode];

    if (selectedTypesForMode.length === numPossibleProjectTypes[mode]) {
      return true;
    } else if (selectedTypesForMode.length === 0) {
      return false;
    }

    return null;
  };

  const onHeaderClick = (mode) => {
    const checked = getHeaderChecked(mode);

    dispatch({ type: 'projectTypeHeader', payload: !checked, meta: mode });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button onClick={toggle} size="sm" outline title="Advanced Filter" className="py-0">
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        </Button>
      </div>
      <Collapse isOpen={isOpen}>
        <Container fluid className="p-0">
          <b>Filter By Project Type:</b>
          <Row className="mb-2">
            <Col>
              {showProjectTypeHeaders ? (
                <Checkbox
                  uniqueId="road-header"
                  label="Road"
                  disabled={disabled}
                  checked={getHeaderChecked('road')}
                  color={labelColors?.road}
                  onChange={() => onHeaderClick('road')}
                />
              ) : null}
              {Object.keys(projectTypes.road).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-road`}
                  label={name}
                  checked={selectedProjectTypes.road.includes(name)}
                  color={labelColors?.road}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'road' })}
                  disabled={disabled}
                  indent={showProjectTypeHeaders}
                />
              ))}
            </Col>
            <Col>
              {showProjectTypeHeaders ? (
                <Checkbox
                  uniqueId="transit-header"
                  label="Transit"
                  disabled={disabled}
                  checked={getHeaderChecked('transit')}
                  color={labelColors?.transit}
                  onChange={() => onHeaderClick('transit')}
                />
              ) : null}
              {Object.keys(projectTypes.transit).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-transit`}
                  label={name}
                  checked={selectedProjectTypes.transit.includes(name)}
                  color={labelColors?.transit}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'transit' })}
                  disabled={disabled}
                  indent={showProjectTypeHeaders}
                />
              ))}
            </Col>
          </Row>
          {showProjectTypeHeaders ? (
            <Row>
              <Col>
                <Checkbox
                  uniqueId="activateTransportation-header"
                  label="Active Transportation"
                  disabled={disabled}
                  checked={getHeaderChecked('activeTransportation')}
                  color={labelColors?.activeTransportation}
                  onChange={() => onHeaderClick('activeTransportation')}
                />
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col>
              {Object.keys(projectTypes.activeTransportation)
                .slice(0, Object.keys(projectTypes.activeTransportation).length / 2)
                .map((name) => (
                  <Checkbox
                    key={name}
                    uniqueId={`${name}-activeTransportation`}
                    label={name}
                    checked={selectedProjectTypes.activeTransportation.includes(name)}
                    color={labelColors?.activeTransportation}
                    onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'activeTransportation' })}
                    disabled={disabled}
                    indent={showProjectTypeHeaders}
                  />
                ))}
            </Col>
            <Col>
              {Object.keys(projectTypes.activeTransportation)
                .slice(Object.keys(projectTypes.activeTransportation).length / 2)
                .map((name) => (
                  <Checkbox
                    key={name}
                    uniqueId={`${name}-activeTransportation`}
                    label={name}
                    checked={selectedProjectTypes.activeTransportation.includes(name)}
                    color={labelColors?.activeTransportation}
                    onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'activeTransportation' })}
                    disabled={disabled}
                    indent={showProjectTypeHeaders}
                  />
                ))}
            </Col>
          </Row>
        </Container>
      </Collapse>
    </>
  );
}

AdvancedControls.propTypes = {
  projectTypes: PropTypes.object.isRequired,
  labelColors: PropTypes.object,
  selectedProjectTypes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  showProjectTypeHeaders: PropTypes.bool,
};
