import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';
import { useSpecialTranslation } from '../services/i18n';
import Details from './Details';
import { MapWidgetContext } from './MapWidget';
import './ProjectInformation.scss';

export default function ProjectInformation({ graphics, showLoader, highlightGraphic }) {
  const { updateScrollbar } = React.useContext(MapWidgetContext);

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (updateScrollbar) {
      console.log('updating scrollbar');
      updateScrollbar();
    }

    // this if statement helps with tests
    if (typeof containerRef.current.scrollIntoView === 'function' && graphics.length > 0) {
      console.log('scrolling into view');
      containerRef.current.scrollIntoView();
    }
  }, [graphics, updateScrollbar]);

  const t = useSpecialTranslation();
  const spinnerSize = '5rem';

  return (
    <div className="project-information" ref={containerRef}>
      {graphics.length === 0 && !showLoader && <p className="m-3">{t('trans:projectInformationPrompt')}</p>}
      {showLoader && (
        <div className="loader">
          <Spinner color="secondary" style={{ height: spinnerSize, width: spinnerSize }} />
        </div>
      )}
      {graphics.map((graphic, index) => (
        <Details key={index} graphic={graphic} highlightGraphic={highlightGraphic} />
      ))}
    </div>
  );
}

ProjectInformation.propTypes = {
  graphics: PropTypes.array,
  showLoader: PropTypes.bool,
  highlightGraphic: PropTypes.func,
};
