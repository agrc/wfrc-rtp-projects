import { once } from '@arcgis/core/core/reactiveUtils';
import Feature from '@arcgis/core/widgets/Feature';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Collapse } from 'reactstrap';
import config from '../services/config';
import Comments from './Comments';
import './Details.scss';

export default function Details({ graphic, highlightGraphic }) {
  const [collapsed, setCollapsed] = useState(true);
  const containerRef = useRef();
  const [title, setTitle] = useState(null);
  const [featureWidgetGraphic, setFeatureWidgetGraphic] = useState(null);

  const toggle = () => setCollapsed(!collapsed);

  useEffect(() => {
    let feature;
    const buildContent = async () => {
      feature = new Feature({
        container: document.createElement('div'),
        graphic,
        visibleElements: {
          title: false,
        },
        defaultPopupTemplateEnabled: true,
      });

      await once(() => feature.title);

      setTitle(feature.title);

      containerRef.current.appendChild(feature.container);

      setFeatureWidgetGraphic(feature.graphic);
    };

    if (graphic) {
      buildContent();
    }

    return () => {
      if (feature) {
        feature.destroy();
        console.log('destroyed');
      }
    };
  }, [graphic]);

  const showComments =
    config.projectInformation.commentsEnabled &&
    featureWidgetGraphic &&
    new Date() < new Date(config.projectInformation.commentsEnabledUntil) &&
    Object.keys(featureWidgetGraphic.attributes).some((name) => name === config.projectInformation.fieldNames.globalId);

  return (
    <div className="details" onMouseEnter={() => highlightGraphic(graphic)} onMouseLeave={() => highlightGraphic()}>
      <div className="title" onClick={toggle}>
        {title}
      </div>
      <Collapse isOpen={!collapsed}>
        <div ref={containerRef}></div>
        {showComments && (
          <Comments globalId={featureWidgetGraphic.attributes[config.projectInformation.fieldNames.globalId]} />
        )}
      </Collapse>
    </div>
  );
}
Details.propTypes = {
  graphic: PropTypes.object,
  highlightGraphic: PropTypes.func.isRequired,
};
