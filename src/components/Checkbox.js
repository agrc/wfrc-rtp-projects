import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

export default function Checkbox({ label, checked, color, onChange, uniqueId, disabled }) {
  return (
    <FormGroup check inline>
      <Input id={uniqueId ?? label} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />{' '}
      <Label check for={uniqueId ?? label} style={{ marginBottom: 0, color }}>
        {` ${label}`}
      </Label>
    </FormGroup>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  uniqueId: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
};
