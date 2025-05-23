import { describe, expect, it } from 'vitest';
import config from '../services/config';
import { getQuery, initialState, reducer } from './useFilterReducer';

const strip = (str) => str.replace(/\s/g, '');

describe('getQuery', () => {
  it('builds the simple queries', () => {
    const state = {
      ...initialState,
      phaseField: 'PHASE_FIELD',
      phase: ['1', '2'],
      mode: [initialState.mode[0], initialState.mode[1]],
    };

    const query = getQuery(state, 'points', config);

    expect(strip(query)).toMatch("mode='Highway'");
    expect(strip(query)).toMatch("mode='Transit'");
    expect(strip(query)).not.toMatch("mode='Active Transportation'");
  });

  it('turns off a mode if all associated project types are unchecked', () => {
    const state = {
      ...initialState,
      phaseField: 'PHASE_FIELD',
      phase: ['1', '2'],
      mode: [initialState.mode[0], initialState.mode[1]],
      projectTypes: {
        ...initialState.projectTypes,
        road: [],
      },
    };

    const query = getQuery(state, 'points', config);

    expect(strip(query)).not.toMatch("MODE='Transit'");
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
            roadType3: {
              points: 'roadType3Points',
            },
          },
          transit: {
            transitType: {
              points: 'transitTypePoints',
            },
            transitType2: {
              points: 'transitType2Points',
            },
            transitType3: {
              points: 'transitType3Points',
            },
          },
          activeTransportation: {
            activeTransportationType: {
              points: 'activeTransportationTypePoints',
            },
            activeTransportationType2: {
              points: 'activeTransportationType2Points',
            },
            activeTransportationType3: {
              points: 'activeTransportationType3Points',
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
      `),
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
            roadType3: {
              points: 'roadType3Points',
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
            activeTransportationType3: {
              points: 'activeTransportationType3Points',
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
        (MODE != 'transit_value')
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
      `),
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

    const query = getQuery(state, 'points', config);

    expect(strip(query)).toMatch(/ANDcost>=1ANDcost<=4/);
  });

  it('adds the limit to phasing query', () => {
    const state = {
      ...initialState,
      phaseLimitEquals: true,
      phaseLimit: true,
    };

    const query = getQuery(state, 'points', config);

    expect(strip(query)).toMatch(/ANDphase_needed=phase/);

    state.phaseLimitEquals = false;

    const lessThanQuery = getQuery(state, 'points', config);

    expect(strip(lessThanQuery)).toMatch(/ANDphase_needed<phase/);
  });

  it('handles the facility type limit query', () => {
    const state = {
      ...initialState,
      limitFacilityType: {
        road: {
          selected: true,
          type: config.filter.limitFacilityType.values[1],
        },
        transit: {
          selected: false,
          type: config.filter.limitFacilityType.values[0],
        },
      },
    };

    const query = getQuery(state, 'points', config);

    expect(strip(query)).toMatch(/ANDlower\(breakout\)LIKE'%local%'/);
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
