import { describe, expect, it } from 'vitest';
import config from './config';
import { getQuery, initialState, reducer } from './useFilterReducer';

const strip = (str) => str.replace(/\s/g, '');

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
      filter: {
        fieldNames: {
          mode: 'MODE',
        },
        symbolValues: {
          mode: {
            road: 'road_value',
          },
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(strip(query)).toEqual(strip("PHASE_FIELD IN (1,2) AND ((MODE = '3') OR (MODE = '4'))"));
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
      filter: {
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

    expect(strip(query)).toEqual(
      strip(`
      PHASE_FIELD IN (1,2)
      AND
      (
        (
          MODE = 'road_value'
          AND
          (
            (roadTypePoints)
            OR
            (roadType2Points)
          )
        )
        OR
        (
          MODE = 'transit_value'
          AND
          (
            (transitTypePoints)
            OR
            (transitType2Points)
          )
        )
        OR
        (
          MODE = 'active_transportation_value'
          AND
          (
            (activeTransportationTypePoints)
            OR
            (activeTransportationType2Points)
          )
        )
      )
      `)
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
      filter: {
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

    expect(strip(query)).toEqual(
      strip(`
      PHASE_FIELD IN (1,2)
      AND
      (
        (
          MODE = 'road_value'
          AND
          (
            (roadTypePoints)
            OR
            (roadType2Points)
          )
        )
        OR
        (
          MODE = 'active_transportation_value'
          AND
          (
            (activeTransportationTypePoints)
            OR
            (activeTransportationType2Points)
          )
        )
      )
      `)
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
      filter: {
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

    expect(strip(query)).toEqual(
      strip(`
      PHASE_FIELD IN (1,2,3,4)
      AND
      (
        (
          MODE = 'road_value'
          AND
          (
            (roadTypePoints)
            OR
            (roadType2Points)
          )
          AND
          (roadType3Points)
          AND
          (roadType4Points)
        )
        OR
        (
          MODE = 'active_transportation_value'
        )
      )
      `)
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
      filter: {
        fieldNames: {
          mode: 'MODE',
          cost: 'COST',
        },
        symbolValues: {
          mode: {
            road: 'road_value',
          },
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(strip(query)).toEqual(
      strip(`
      phase IN (1,2,3,4)
      AND
      (
        (
          MODE = 'Highway'
        )
        OR
        (
          MODE = 'Transit'
        )
        OR
        (
          MODE = 'Active Transportation'
        )
      )
      AND
      COST >= 1 AND COST <= 4
    `)
    );
  });
});

describe('reducer', () => {
  it('returns the initial state on reset', () => {
    expect(reducer(null, { type: 'reset' })).toEqual(initialState);
  });

  it('handles project type header toggles off', () => {
    const current = {
      ...initialState,
      projectTypes: {
        ...initialState.projectTypes,
        road: [initialState.projectTypes.road[0]],
      },
    };

    const toggleOffResult = reducer(current, { type: 'projectTypeHeader', meta: 'road', payload: false });
    expect(toggleOffResult.projectTypes.road).toEqual([]);
  });

  it('handles project type header toggles on', () => {
    const current = {
      ...initialState,
      projectTypes: {
        ...initialState.projectTypes,
        road: [initialState.projectTypes.road[0]],
      },
    };

    const toggleOnResult = reducer(current, { type: 'projectTypeHeader', meta: 'road', payload: true });
    expect(toggleOnResult.projectTypes.road).toEqual(initialState.projectTypes.road);
  });

  it("toggle off project type header doesn't affect UDOT ownership checkboxes", () => {
    let offByDefaultType;
    for (const name in config.filter.projectTypes.road) {
      if (config.filter.projectTypes.road[name].offByDefault) {
        offByDefaultType = name;
        break;
      }
    }
    const current = {
      ...initialState,
      projectTypes: {
        ...initialState.projectTypes,
        road: [...initialState.projectTypes.road, offByDefaultType],
      },
    };

    // unselect all should leave off by default alone
    const toggleOffResult = reducer(current, { type: 'projectTypeHeader', meta: 'road', payload: false });
    expect(toggleOffResult.projectTypes.road).toEqual([offByDefaultType]);
  });

  it("toggle on project type header doesn't affect UDOT ownership checkboxes", () => {
    const current = {
      ...initialState,
    };

    // select all should leave off by default alone
    current.projectTypes.road = initialState.projectTypes.road;
    const toggleOnResult = reducer(current, { type: 'projectTypeHeader', meta: 'road', payload: true });
    expect(toggleOnResult.projectTypes.road).toEqual(initialState.projectTypes.road);
  });
});
