import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useRef, useState } from 'react';
import { Button, Card, CardHeader } from 'reactstrap';
import { useSpecialTranslation } from '../services/i18n';
import './MapWidget.scss';

export const MapWidgetContext = createContext();

export default function MapWidget({ defaultOpen, position, mapView, children, icon, onReset, name }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const scrollBar = useRef();
  const scrollBarContainer = useRef();
  const t = useSpecialTranslation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const padding = '15px';
  const cardStyle = {
    display: isOpen ? 'flex' : 'none',
    top: position === 0 ? padding : `calc(50% - ${padding})`,
    bottom: position === 0 ? `calc(50% + 2 * ${padding})` : padding,
  };
  const buttonDiv = useRef();
  useEffect(() => {
    if (mapView && buttonDiv.current) {
      mapView.ui.add(buttonDiv.current, 'top-left');
    }

    const buttonDivRef = buttonDiv.current;

    return () => {
      mapView && mapView.ui.remove(buttonDivRef);
    };
  }, [buttonDiv, mapView]);

  const updateScrollbar = React.useCallback(() => scrollBar.current?.update(), []);

  React.useEffect(() => {
    if (scrollBarContainer.current) {
      scrollBar.current = new PerfectScrollbar(scrollBarContainer.current, { suppressScrollX: true });
    }

    return () => {
      if (scrollBar.current) {
        scrollBar.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <MapWidgetContext.Provider value={{ updateScrollbar }}>
        <div className="map-widget-button esri-widget--button" ref={buttonDiv} onClick={toggle} title={name}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <Card style={cardStyle} className="map-widget-card">
          <CardHeader>
            {name}
            <div className="buttons-container">
              {onReset && (
                <Button className="reset-button" color="link" onClick={onReset}>
                  <small>{t('trans:reset')}</small>
                </Button>
              )}
              <Button close onClick={toggle} />
            </div>
          </CardHeader>
          <div ref={scrollBarContainer} className="card-body">
            {children}
          </div>
        </Card>
      </MapWidgetContext.Provider>
    </div>
  );
}

MapWidget.propTypes = {
  defaultOpen: PropTypes.bool,
  position: PropTypes.number,
  mapView: PropTypes.object,
  name: PropTypes.string,
  icon: PropTypes.object,
  children: PropTypes.node,
  onReset: PropTypes.func,
};
