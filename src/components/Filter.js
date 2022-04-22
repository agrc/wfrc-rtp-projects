import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import propTypes from 'prop-types';
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { useImmerReducer } from 'use-immer';
import config from '../services/config';
import './Filter.scss';
import Swatch from './Swatch';
import { useMapLayers } from './utils';

function reducer(draft, action) {
  switch (action.type) {
    case 'display':
      draft.display = action.payload;
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const MODE = 'mode';
const PHASE = 'phase';
const initialState = {
  display: MODE,
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

  React.useEffect(() => {
    if (layers) {
      layers.modePoints.visible = state.display === MODE;
      layers.modeLines.visible = state.display === MODE;
      layers.phasePoints.visible = state.display === PHASE;
      layers.phaseLines.visible = state.display === PHASE;
    }
  }, [layers, state.display]);

  const firstColWidth = 7;

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
          <h5>Display FTP Projects by:</h5>
          <FormGroup check inline>
            <Input
              name="radio-type"
              id="transportation"
              type="radio"
              checked={state.display === MODE}
              onChange={() => dispatch({ type: 'display', payload: MODE })}
            />{' '}
            <Label check for="transportation">
              Transportation Mode
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Input
              name="radio-type"
              id="phase"
              type="radio"
              checked={state.display === PHASE}
              onChange={() => dispatch({ type: 'display', payload: PHASE })}
            />{' '}
            <Label check for="phase">
              Phase Years
            </Label>
          </FormGroup>
          <Container fluid className="p-0">
            <Row>
              <Col xs={firstColWidth}></Col>
              <Col>Linear</Col>
              <Col>Point</Col>
            </Row>
            <Row>
              <Col xs={firstColWidth}>
                <FormGroup check inline>
                  <Input id="road" type="checkbox" checked />{' '}
                  <Label check for="road">
                    {' '}
                    Road
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <Swatch layer={layers?.modeLines} value={'Roadway'} />
              </Col>
              <Col>
                <Swatch layer={layers?.modePoints} value={'Roadway'} />
              </Col>
            </Row>
            <Row>
              <Col xs={firstColWidth}>
                <FormGroup check inline>
                  <Input id="transit" type="checkbox" checked />{' '}
                  <Label check for="transit">
                    {' '}
                    Transit
                  </Label>
                </FormGroup>
              </Col>
              <Col>swatch</Col>
              <Col>swatch</Col>
            </Row>
            <Row>
              <Col xs={firstColWidth}>
                <FormGroup check inline>
                  <Input id="active-transportation" type="checkbox" checked />{' '}
                  <Label check for="active-transportation">
                    {' '}
                    Active Transportation
                  </Label>
                </FormGroup>
              </Col>
              <Col>swatch</Col>
              <Col>swatch</Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}

Filter.propTypes = {
  mapView: propTypes.object,
};
