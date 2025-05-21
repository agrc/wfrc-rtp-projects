import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popover from 'bootstrap/js/dist/popover';
import PropTypes from 'prop-types';

export default function InfoPopup({ content, className, style }) {
  const setUp = (ref) => {
    if (ref) {
      new Popover(ref, {
        container: 'body',
        content,
        html: true,
        position: 'left',
        trigger: 'hover',
      });
    }
  };

  return (
    <span ref={setUp} className={className} style={style}>
      <FontAwesomeIcon tabIndex="0" icon={faCircleQuestion} />
    </span>
  );
}
InfoPopup.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
};
