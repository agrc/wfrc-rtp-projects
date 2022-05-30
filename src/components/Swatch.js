import { renderPreviewHTML } from '@arcgis/core/symbols/support/symbolUtils';
import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

export default function Swatch({ symbol }) {
  const [legend, setLegend] = React.useState(null);

  React.useEffect(() => {
    if (symbol && !legend) {
      renderPreviewHTML(symbol, { size: 8 }).then(setLegend);
    }
  }, [legend, symbol]);

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
  symbol: PropTypes.object,
};
