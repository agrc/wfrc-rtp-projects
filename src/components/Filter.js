import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import propTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './Filter.scss';

export default function Filter({ mapView }) {
  const [isOpen, setIsOpen] = React.useState(true);
  const buttonDiv = React.useRef(null);

  const toggle = () => setIsOpen((current) => !current);

  React.useEffect(() => {
    if (mapView && buttonDiv.current) {
      mapView.ui.add(buttonDiv.current, 'top-left');
    }
  }, [mapView, buttonDiv]);

  return (
    <>
      <div className="esri-widget--button" ref={buttonDiv} onClick={toggle} title="Toggle Filter">
        <FontAwesomeIcon icon={faList} />
      </div>
      <div
        className={clsx(
          'card',
          'position-absolute',
          'top-0',
          'end-0',
          'filter-card',
          'me-3 mt-3',
          !isOpen && 'invisible'
        )}
      >
        <div className="card-header d-flex justify-content-between align-items-center">
          Filter
          <div className="d-flex align-items-center">
            <Button className="reset-button text-decoration-none" color="link" onClick={() => {}}>
              <small>reset</small>
            </Button>
            <Button close onClick={toggle} />
          </div>
        </div>
        <div className="card-body">body</div>
      </div>
    </>
  );
}

Filter.propTypes = {
  mapView: propTypes.object,
};
