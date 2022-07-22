import { useState } from 'react';
import MapWidgetContainer from './MapWidgetContainer';
import MapWidgetResizeHandle from './MapWidgetResizeHandle';

export default {
  component: MapWidgetContainer,
};

const width = '200px';
export const Default = () => {
  const [resize, setResize] = useState(0);

  return (
    <div className="h-100 w-100 position-relative">
      <MapWidgetContainer openStates={[true, true]}>
        <div className="bg-primary rounded border" style={{ width, height: `calc(50% + ${resize}px - 0.25rem)` }}></div>
        <MapWidgetResizeHandle onResize={(y) => setResize(y)} />
        <div
          className="bg-secondary rounded border"
          style={{ width, height: `calc(50% - ${resize}px - 0.25rem)` }}
        ></div>
      </MapWidgetContainer>
    </div>
  );
};
