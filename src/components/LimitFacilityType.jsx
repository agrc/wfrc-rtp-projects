import PropTypes from 'prop-types';
import { useUID } from 'react-uid';
import { Button, FormGroup, Input, Label } from 'reactstrap';

export default function LimitFacilityType({ labels, values, selected, type, color, onChange }) {
  const uid = useUID();

  return (
    <>
      <hr className="my-1" />
      <FormGroup check inline>
        <Input id={uid} type="checkbox" checked={selected} onChange={() => onChange(!selected, type)} />{' '}
        <Label check for={uid} style={{ marginBottom: 0, color }} className="fst-italic d-flex align-items-center">
          <span className="text-nowrap">Limit to </span>
          <Button
            className="py-0 mx-1 px-1"
            color="secondary"
            outline
            size="sm"
            onClick={() => onChange(selected, type === values[0] ? values[1] : values[0])}
          >
            {labels[values.indexOf(type)]}
          </Button>{' '}
          Facilities
        </Label>
      </FormGroup>
    </>
  );
}

LimitFacilityType.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
