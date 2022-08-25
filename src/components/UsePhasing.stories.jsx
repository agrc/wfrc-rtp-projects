import config from '../services/config';
import UsePhasing from './UsePhasing';

export default {
  component: UsePhasing,
};

export const Default = () => (
  <>
    <h1>Default Layout</h1>
    <UsePhasing
      phaseField={config.filter.fieldNames.phase}
      phaseLimit={true}
      phaseLimitEquals={false}
      dispatch={() => {}}
    />
    <hr />
    <h1>Inline Layout</h1>
    <UsePhasing
      phaseField={config.filter.fieldNames.phaseNeeded}
      phaseLimit={false}
      phaseLimitEquals={true}
      dispatch={() => {}}
      inline
    />
  </>
);
