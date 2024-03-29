import PropTypes from 'prop-types';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import config from '../services/config';
import InfoPopup from './InfoPopup';

export default function UsePhasing({ phaseField, phaseLimit, phaseLimitEquals, disabled, inline, dispatch }) {
  const handleChangeField = (event) =>
    dispatch({ type: 'usePhasing', meta: 'phaseField', payload: event.target.value });
  const handleChangeLimit = (event) =>
    dispatch({
      type: 'usePhasing',
      meta: 'phaseLimit',
      payload: event.target.checked,
    });
  const toggleLimitEquals = () =>
    dispatch({
      type: 'usePhasing',
      meta: 'phaseLimitEquals',
      payload: !phaseLimitEquals,
    });

  const getContents = () => (
    <>
      <FormGroup check inline={inline}>
        <Input
          id={`use-phasing-constrained-${inline}`}
          name={`phasing-${inline}`}
          type="radio"
          value={config.filter.fieldNames.phase}
          checked={phaseField === config.filter.fieldNames.phase}
          disabled={disabled}
          onChange={handleChangeField}
        />
        <Label check for={`use-phasing-constrained-${inline}`}>
          Fiscally Constrained
        </Label>
      </FormGroup>
      <FormGroup check inline={inline}>
        <Input
          id={`use-phasing-needs-${inline}`}
          name={`phasing-${inline}`}
          type="radio"
          value={config.filter.fieldNames.phaseNeeded}
          checked={phaseField === config.filter.fieldNames.phaseNeeded}
          disabled={disabled}
          onChange={handleChangeField}
        />
        <Label check for={`use-phasing-needs-${inline}`}>
          Needs
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Input id={`use-phasing-limit-${inline}`} type="checkbox" checked={phaseLimit} onChange={handleChangeLimit} />
        <Label className="d-flex align-items-center fst-italic" check for={`use-phasing-limit-${inline}`}>
          <span className="text-nowrap">Limit to Needs {inline ? 'Phase' : null}</span>
          <Button className="py-0 mx-1" color="secondary" outline size="sm" onClick={toggleLimitEquals}>
            {phaseLimitEquals ? '=' : '<'}
          </Button>
          <span className="text-nowrap">FC {inline ? 'Phase' : null}</span>
        </Label>
      </FormGroup>
    </>
  );

  if (inline) {
    return (
      <div className="d-flex">
        <b className="me-3 text-nowrap">Use Phasing:</b>
        <div>{getContents()}</div>
        <InfoPopup className="" content={config.filter.infoText.usePhasing}></InfoPopup>
      </div>
    );
  }

  return (
    <>
      <b>Use Phasing:</b>
      {getContents()}
    </>
  );
}

UsePhasing.propTypes = {
  phaseField: PropTypes.string.isRequired,
  phaseLimit: PropTypes.bool.isRequired,
  phaseLimitEquals: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  inline: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};
