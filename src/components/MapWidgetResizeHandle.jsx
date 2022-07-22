import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';

export default function MapWidgetResizeHandle({ onResize, show }) {
  const ref = useRef(null);
  const [cursor, setCursor] = useState('grab');
  const [isHovering, setIsHovering] = useState(false);

  const style = {
    height: '0.6rem',
    cursor,
    top: 'calc(50% - 0.3rem)',
    display: show ? 'flex' : 'none',
  };
  const maxDrag = 300;

  return (
    <Draggable
      axis="y"
      onStart={() => setCursor('grabbing')}
      onStop={() => setCursor('grab')}
      onDrag={(_, { y }) => {
        console.log(y);
        onResize(y);
      }}
      nodeRef={ref}
      bounds={{ top: -maxDrag, bottom: maxDrag }}
    >
      <div
        ref={ref}
        className={clsx(
          'bg-light align-items-center justify-content-center rounded border position-absolute w-50 opacity-75',
          isHovering && 'opacity-100'
        )}
        style={style}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <hr className="m-0 w-75"></hr>
      </div>
    </Draggable>
  );
}

MapWidgetResizeHandle.propTypes = {
  onResize: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
