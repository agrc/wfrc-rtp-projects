import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import config from '../services/config';

export default function UsePhasing({ phaseField, disabled, inline, dispatch }) {
  const handleChange = (event) => dispatch({ type: 'usePhasing', payload: event.target.value });

  return (
    <>
      <b className="me-3">Use Phasing:</b>
      <FormGroup check inline={inline}>
        <Input
          id="use-phasing-constrained"
          name={`phasing-${inline}`}
          type="radio"
          value={config.fieldNames.phase}
          checked={phaseField === config.fieldNames.phase}
          disabled={disabled}
          onChange={handleChange}
        />
        <Label check for="use-phasing-constrained">
          Financially Constrained
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Input
          id="use-phasing-needs"
          name={`phasing-${inline}`}
          type="radio"
          value={config.fieldNames.phaseNeeded}
          checked={phaseField === config.fieldNames.phaseNeeded}
          disabled={disabled}
          onChange={handleChange}
        />
        <Label check for="use-phasing-needs">
          Needs
        </Label>
      </FormGroup>
    </>
  );
}

UsePhasing.propTypes = {
  phaseField: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  inline: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};
