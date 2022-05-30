import PropTypes from 'prop-types';
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import Swatch from './Swatch';

const firstColWidth = 7;

export default function SimpleControls({ type, state, dispatch, groups }) {
  const toggle = (value) => {
    dispatch({ type: 'simple', meta: type, payload: value });
  };

  const getSymbol = (layer, value) => {
    if (!layer) {
      return null;
    }

    for (const info of layer.renderer.uniqueValueInfos) {
      if (info.value === value) {
        return info.symbol;
      }
    }

    throw new Error(
      `Could not find symbol in layer: "${layer.title}" for value: "${value}" in field: "${layer.renderer.field}"!`
    );
  };

  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={firstColWidth}></Col>
        <Col className="text-center">Linear</Col>
        <Col className="text-center">Point</Col>
      </Row>
      {groups.map((group) => {
        const pointSymbol = getSymbol(group.point, group.value);
        const labelColor = pointSymbol ? pointSymbol.color.toCss() : null;

        return (
          <Row key={group.value}>
            <Col xs={firstColWidth}>
              <FormGroup check inline>
                <Input
                  id={group.value}
                  type="checkbox"
                  checked={state[type].includes(group.value)}
                  onChange={() => toggle(group.value)}
                  style={{ color: labelColor }}
                />{' '}
                <Label check for={group.value} style={{ color: labelColor, marginBottom: 0 }}>
                  {` ${group.label}`}
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <Swatch symbol={getSymbol(group.linear, group.value)} />
            </Col>
            <Col>
              <Swatch symbol={pointSymbol} />
            </Col>
          </Row>
        );
      })}
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
