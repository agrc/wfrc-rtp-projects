import config from '../services/config';
import LimitType from './LimitType';

export default {
  component: LimitType,
};

export const Default = () => (
  <>
    <LimitType
      color={'red'}
      labels={config.filter.limitFacilityType.labels}
      onChange={() => {}}
      postFix="Facilities"
      selected={true}
      type="local"
      values={config.filter.limitFacilityType.values}
    />
    <LimitType
      color={'blue'}
      labels={config.filter.limitFacilityType.labels}
      onChange={() => {}}
      selected={false}
      type="state"
      values={config.filter.limitFacilityType.values}
    />
  </>
);
