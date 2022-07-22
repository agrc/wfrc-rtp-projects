import PropTypes from 'prop-types';

export default function MapWidgetContainer({ children, openStates }) {
  const height = openStates.filter((open) => open).length > 0 ? '100%' : '0';

  const padding = '15px';
  const style = {
    height,
    paddingTop: padding,
    paddingBottom: padding,
    marginRight: padding,
  };

  return (
    <div
      className="position-absolute end-0 widget-container d-flex flex-column justify-content-between align-items-center"
      style={style}
    >
      {children}
    </div>
  );
}

MapWidgetContainer.propTypes = {
  children: PropTypes.node.isRequired,
  openStates: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
