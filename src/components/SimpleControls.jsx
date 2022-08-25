import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import Checkbox from './Checkbox';
import Swatch from './Swatch';
import UsePhasing from './UsePhasing';
import { getSymbol } from './utils';

const firstColWidth = 7;

export default function SimpleControls({ type, state, dispatch, groups, disabled, showPhaseFilter }) {
  const toggle = (value) => {
    dispatch({ type: 'simple', payload: value, meta: type });
  };

  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={firstColWidth}></Col>
        <Col className="text-center">
          <b>Linear</b>
        </Col>
        <Col className="text-center">
          <b>Point</b>
        </Col>
      </Row>
      {groups.map((group) => {
        const pointSymbol = getSymbol(group.point, group.value);
        const labelColor = pointSymbol ? pointSymbol.color.toCss() : null;

        return (
          <Row key={group.value}>
            <Col xs={firstColWidth}>
              <Checkbox
                label={group.label}
                checked={state[type].includes(group.value)}
                onChange={() => toggle(group.value)}
                color={labelColor}
                disabled={disabled}
              />
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
      {showPhaseFilter ? (
        <Row>
          <Col>
            <UsePhasing
              phaseField={state.phaseField}
              phaseLimit={state.phaseLimit}
              phaseLimitEquals={state.phaseLimitEquals}
              disabled={disabled}
              inline
              dispatch={dispatch}
            />
          </Col>
        </Row>
      ) : null}
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
  disabled: PropTypes.bool.isRequired,
  showPhaseFilter: PropTypes.bool,
};
