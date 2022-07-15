import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Alert color="danger" className="m-3">
      <h4 className="alert-heading">Error!</h4>
      <p>Looks like something went wrong.</p>
      <pre>{error.message}</pre>
      <Button color="primary" onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </Alert>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};
