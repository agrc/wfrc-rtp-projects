import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Collapse, Container, Row } from 'reactstrap';
import Checkbox from './Checkbox';

export default function AdvancedControls({ projectTypes, labelColors, dispatch, selectedProjectTypes, disabled }) {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => setIsOpen((current) => !current);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button onClick={toggle} size="sm" outline title="Advanced Filter" className="py-0">
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        </Button>
      </div>
      <Collapse isOpen={isOpen}>
        <Container fluid className="p-0">
          <div>Filter By Project Type:</div>
          <Row>
            <Col>
              {Object.keys(projectTypes.road).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-road`}
                  label={name}
                  checked={selectedProjectTypes.road.includes(name)}
                  color={labelColors?.road}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'road' })}
                  disabled={disabled}
                />
              ))}
            </Col>
            <Col>
              {Object.keys(projectTypes.transit).map((name) => (
                <Checkbox
                  key={name}
                  uniqueId={`${name}-transit`}
                  label={name}
                  checked={selectedProjectTypes.transit.includes(name)}
                  color={labelColors?.transit}
                  onChange={() => dispatch({ type: 'projectType', payload: name, meta: 'transit' })}
                  disabled={disabled}
                />
              ))}
            </Col>
          </Row>
          <Row className="mt-2">
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
};
