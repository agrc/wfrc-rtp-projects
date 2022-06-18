import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default function ProjectTypeHeader({ color, onClick, operationLabel, children }) {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <span style={{ color: color }}>{children}</span>
      <Button color="link" className="p-0 border-0" size="sm" onClick={onClick}>
        {operationLabel}
      </Button>
    </div>
  );
}
ProjectTypeHeader.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  operationLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
