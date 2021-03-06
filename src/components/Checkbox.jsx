import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

export default function Checkbox({ label, checked, color, onChange, uniqueId, disabled, indent = false, distinct }) {
  const setIndeterminate = (ref) => {
    if (ref) {
      ref.indeterminate = checked === null;
    }
  };

  return (
    <>
      {distinct ? <hr className="m-0" /> : null}
      <FormGroup check inline className={clsx(indent && 'ms-2')}>
        <Input
          innerRef={setIndeterminate}
          id={uniqueId ?? label}
          type="checkbox"
          checked={!!checked}
          onChange={onChange}
          disabled={disabled}
        />{' '}
        <Label
          check
          for={uniqueId ?? label}
          style={{ marginBottom: 0, color }}
          className={clsx(distinct && 'fst-italic')}
        >
          {` ${label}`}
        </Label>
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
  distinct: PropTypes.bool,
};
