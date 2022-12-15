import { once } from '@arcgis/core/core/reactiveUtils';
import Feature from '@arcgis/core/widgets/Feature';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Collapse } from 'reactstrap';
import config from '../services/config';
import Comments from './Comments';
import './Details.scss';

export default function Details({ graphic, highlightGraphic, onlyOne, urlState, setUrlState }) {
  const isNotSelected =
    urlState.selected_id !== graphic.attributes.OBJECTID || urlState.selected_layer_id !== graphic.layer.id;
  const [collapsed, setCollapsed] = useState(isNotSelected);
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

      if (onlyOne) {
        highlightGraphic(graphic);
      }
    };

    if (graphic) {
      buildContent();
    }

    return () => {
      if (feature) {
        feature.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphic]);

  useEffect(() => {
    if (!collapsed) {
      setUrlState({
        selected_id: graphic.attributes.OBJECTID,
        selected_layer_id: graphic.layer.id,
      });
    } else if (!isNotSelected) {
      setUrlState({
        selected_id: null,
        selected_layer_id: null,
      });
    }
  }, [collapsed, graphic.attributes.OBJECTID, graphic.layer.id, isNotSelected, setUrlState]);

  const showComments =
    config.projectInformation.showComments &&
    featureWidgetGraphic &&
    Object.keys(featureWidgetGraphic.attributes).some((name) => name === config.projectInformation.fieldNames.globalId);

  return (
    <div
      className="details"
      onMouseEnter={() => !onlyOne && highlightGraphic(graphic)}
      onMouseLeave={() => !onlyOne && highlightGraphic()}
    >
      <div className="title" onClick={toggle}>
        {title}
      </div>
      <Collapse isOpen={!collapsed}>
        <div ref={containerRef}></div>
        {showComments && (
          <Comments
            globalId={featureWidgetGraphic.attributes[config.projectInformation.fieldNames.globalId]}
            showNewCommentForm={
              config.projectInformation.newCommentsEnabled &&
              new Date() < new Date(config.projectInformation.newCommentsEnabledUntil)
            }
          />
        )}
      </Collapse>
    </div>
  );
}
Details.propTypes = {
  graphic: PropTypes.object,
  highlightGraphic: PropTypes.func.isRequired,
  onlyOne: PropTypes.bool.isRequired,
  urlState: PropTypes.object.isRequired,
  setUrlState: PropTypes.func.isRequired,
};
