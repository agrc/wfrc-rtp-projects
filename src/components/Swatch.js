import { renderPreviewHTML } from '@arcgis/core/symbols/support/symbolUtils';
import propTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

export default function Swatch({ layer, value }) {
  const [legend, setLegend] = React.useState(null);

  React.useEffect(() => {
    if (layer && !legend) {
      for (const info of layer.renderer.uniqueValueInfos) {
        if (info.value === value) {
          console.log('info', info);
          renderPreviewHTML(info.symbol).then(setLegend);

          return;
        }
      }

      throw new Error(`Could not find symbol for value: ${value}`);
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
  layer: propTypes.object,
  value: propTypes.string.isRequired,
};
