import PropTypes from 'prop-types';
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import Swatch from './Swatch';

const firstColWidth = 7;

export default function SimpleControls({ type, state, dispatch, groups }) {
  const toggle = (value) => {
    dispatch({ type: 'simple', meta: type, payload: value });
  };

  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={firstColWidth}></Col>
        <Col className="text-center">Linear</Col>
        <Col className="text-center">Point</Col>
      </Row>
      {groups.map((group) => (
        <Row key={group.value}>
          <Col xs={firstColWidth}>
            <FormGroup check inline>
              <Input
                id={group.value}
                type="checkbox"
                checked={state[type].includes(group.value)}
                onChange={() => toggle(group.value)}
              />{' '}
              <Label check for={group.value}>
                {` ${group.label}`}
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Swatch layer={group.linear} value={group.value} />
          </Col>
          <Col>
            <Swatch layer={group.point} value={group.value} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}
SimpleControls.propTypes = {
  type: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      linear: PropTypes.object,
      point: PropTypes.object,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  dispatch: PropTypes.func.isRequired,
};
