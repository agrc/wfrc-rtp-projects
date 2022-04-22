import { renderPreviewHTML } from '@arcgis/core/symbols/support/symbolUtils';
import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

export default function Swatch({ layer, value }) {
  const [legend, setLegend] = React.useState(null);

  React.useEffect(() => {
    if (layer && !legend) {
      for (const info of layer.renderer.uniqueValueInfos) {
        if (info.value === value) {
          renderPreviewHTML(info.symbol).then(setLegend);

          return;
        }
      }

      throw new Error(
        `Could not find symbol in layer: "${layer.title}" for value: "${value}" in field: "${layer.renderer.field}"!`
      );
    }
  }, [layer, legend, value]);

  return legend ? (
    <div
      className="d-flex flex-column h-100 justify-content-center align-items-center"
      dangerouslySetInnerHTML={{ __html: legend.innerHTML }}
    ></div>
  ) : (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner type="grow" size="sm" color="secondary" />
    </div>
  );
}

Swatch.propTypes = {
  layer: PropTypes.object,
  value: PropTypes.string.isRequired,
};
