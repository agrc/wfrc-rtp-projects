import config from '../services/config';
import LimitFacilityType from './LimitFacilityType';

export default {
  component: LimitFacilityType,
};

export const Default = () => (
  <>
    <LimitFacilityType
      color={'red'}
      labels={config.filter.limitFacilityType.labels}
      onChange={() => {}}
      selected={true}
      type="local"
      values={config.filter.limitFacilityType.values}
    />
    <LimitFacilityType
      color={'blue'}
      labels={config.filter.limitFacilityType.labels}
      onChange={() => {}}
      selected={false}
      type="state"
      values={config.filter.limitFacilityType.values}
    />
  </>
);
