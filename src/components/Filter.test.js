import { describe, expect, it } from 'vitest';
import { getQuery, initialState, reducer } from '../services/useFilterReducer';

describe('getQuery', () => {
  it('builds the simple queries', () => {
    const state = {
      ...initialState,
      phaseField: 'PHASE_FIELD',
      phase: ['1', '2'],
      mode: ['3', '4'],
      projectTypes: {
        road: [],
        transit: [],
        activeTransportation: [],
      },
    };
    const config = {
      phaseField: 'PHASE_FIELD',
      fieldNames: {
        mode: 'MODE',
      },
      symbolValues: {
        mode: {
          road: 'road_value',
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(query).toEqual("PHASE_FIELD IN (1,2) AND MODE IN ('3','4')");
  });

  it('builds and adds the project type queries', () => {
    const state = {
      ...initialState,
      phaseField: 'PHASE_FIELD',
      phase: ['1', '2'],
      mode: ['road_value', 'transit_value', 'active_transportation_value'],
      projectTypes: {
        road: ['roadType', 'roadType2'],
        transit: ['transitType', 'transitType2'],
        activeTransportation: ['activeTransportationType', 'activeTransportationType2'],
      },
    };
    const config = {
      phaseField: 'PHASE_FIELD',
      fieldNames: {
        mode: 'MODE',
      },
      symbolValues: {
        mode: {
          road: 'road_value',
          transit: 'transit_value',
          activeTransportation: 'active_transportation_value',
        },
      },
      filter: {
        projectTypes: {
          road: {
            roadType: {
              points: 'roadTypePoints',
            },
            roadType2: {
              points: 'roadType2Points',
            },
          },
          transit: {
            transitType: {
              points: 'transitTypePoints',
            },
            transitType2: {
              points: 'transitType2Points',
            },
          },
          activeTransportation: {
            activeTransportationType: {
              points: 'activeTransportationTypePoints',
            },
            activeTransportationType2: {
              points: 'activeTransportationType2Points',
            },
          },
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(query).toEqual(
      "PHASE_FIELD IN (1,2) AND MODE IN ('road_value','transit_value','active_transportation_value') AND ((roadTypePoints) OR (roadType2Points) OR (transitTypePoints) OR (transitType2Points) OR (activeTransportationTypePoints) OR (activeTransportationType2Points))"
    );
  });

  it('only includes project type queries for which their corresponding checkbox is check', () => {
    const state = {
      ...initialState,
      phaseField: 'PHASE_FIELD',
      phase: ['1', '2'],
      mode: ['road_value', 'active_transportation_value'],
      projectTypes: {
        road: ['roadType', 'roadType2'],
        transit: ['transitType', 'transitType2'],
        activeTransportation: ['activeTransportationType', 'activeTransportationType2'],
      },
    };
    const config = {
      fieldNames: {
        mode: 'MODE',
      },
      symbolValues: {
        mode: {
          road: 'road_value',
          transit: 'transit_value',
          activeTransportation: 'active_transportation_value',
        },
      },
      filter: {
        projectTypes: {
          road: {
            roadType: {
              points: 'roadTypePoints',
            },
            roadType2: {
              points: 'roadType2Points',
            },
          },
          transit: {
            transitType: {
              points: 'transitTypePoints',
            },
            transitType2: {
              points: 'transitType2Points',
            },
          },
          activeTransportation: {
            activeTransportationType: {
              points: 'activeTransportationTypePoints',
            },
            activeTransportationType2: {
              points: 'activeTransportationType2Points',
            },
          },
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(query).toEqual(
      "PHASE_FIELD IN (1,2) AND MODE IN ('road_value','active_transportation_value') AND ((roadTypePoints) OR (roadType2Points) OR (activeTransportationTypePoints) OR (activeTransportationType2Points))"
    );
  });

  it('should honor the `useAnd` prop for project types', () => {
    const state = {
      ...initialState,
      phaseField: 'PHASE_FIELD',
      mode: ['road_value', 'active_transportation_value'],
      projectTypes: {
        road: ['roadType', 'roadType2', 'roadType3And', 'roadType4And'],
        transit: [],
        activeTransportation: [],
      },
    };
    const config = {
      fieldNames: {
        mode: 'MODE',
      },
      symbolValues: {
        mode: {
          road: 'road_value',
          transit: 'transit_value',
          activeTransportation: 'active_transportation_value',
        },
      },
      filter: {
        projectTypes: {
          road: {
            roadType: {
              points: 'roadTypePoints',
            },
            roadType2: {
              points: 'roadType2Points',
            },
            roadType3And: {
              points: 'roadType3Points',
              useAnd: true,
            },
            roadType4And: {
              points: 'roadType4Points',
              useAnd: true,
            },
          },
          transit: {},
          activeTransportation: {},
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(query).toEqual(
      "PHASE_FIELD IN (1,2,3,4) AND MODE IN ('road_value','active_transportation_value') AND ((roadTypePoints) OR (roadType2Points)) AND (roadType3Points) AND (roadType4Points)"
    );
  });

  it('builds the cost queries', () => {
    const state = {
      ...initialState,
      cost: {
        max: 4,
        min: 1,
      },
    };
    const config = {
      fieldNames: {
        mode: 'MODE',
        cost: 'COST',
      },
      symbolValues: {
        mode: {
          road: 'road_value',
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(query).toEqual(
      "phase IN (1,2,3,4) AND MODE IN ('Highway','Transit','Active Transportation') AND COST >= 1 AND COST <= 4"
    );
  });
});

describe('reducer', () => {
  it('returns the initial state on reset', () => {
    expect(reducer(null, { type: 'reset' })).toEqual(initialState);
  });

  it('handles project type header toggles', () => {
    const current = {
      ...initialState,
      projectTypes: {
        ...initialState.projectTypes,
        road: ['a', 'b', 'c'],
      },
    };
    const toggleOffResult = reducer(current, { type: 'projectTypeHeader', meta: 'road', payload: false });
    expect(toggleOffResult.projectTypes.road).toEqual([]);

    const toggleOnResult = reducer(toggleOffResult, { type: 'projectTypeHeader', meta: 'road', payload: true });
    expect(toggleOnResult.projectTypes.road).toEqual(initialState.projectTypes.road);
  });
});
