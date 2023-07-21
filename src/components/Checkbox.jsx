import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import InfoPopup from './InfoPopup';

export default function Checkbox({ label, checked, color, onChange, uniqueId, disabled, indent = false, helpTxt }) {
  const setIndeterminate = (ref) => {
    if (ref) {
      ref.indeterminate = checked === null;
    }
  };

  return (
    <>
      <FormGroup check inline className={clsx(indent && 'ms-2')}>
        <Input
          innerRef={setIndeterminate}
          id={uniqueId ?? label}
          type="checkbox"
          checked={!!checked}
          onChange={onChange}
          disabled={disabled}
        />{' '}
        <Label check for={uniqueId ?? label} style={{ marginBottom: 0, color }}>
          {` ${label}`}
        </Label>
        {helpTxt ? <InfoPopup content={helpTxt} className="ms-2" style={{ color }} /> : null}
      </FormGroup>
    </>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  uniqueId: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  indent: PropTypes.bool,
  helpTxt: PropTypes.string,
};
