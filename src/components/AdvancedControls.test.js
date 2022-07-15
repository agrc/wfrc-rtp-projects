import { describe, expect, it } from 'vitest';
import { allButOffByDefault } from './AdvancedControls';

describe('allButOffByDefault', () => {
  it('should return true if all but offByDefault are selected', () => {
    const state = ['Project Type1', 'Project Type2', 'Limit To UDOT'];

    const config = {
      'Project Type1': {},
      'Project Type2': {},
      'Limit To UDOT': { offByDefault: true },
    };

    expect(allButOffByDefault(state, config)).toBe(true);
  });

  it('should return false if any but offByDefault are unselected', () => {
    const state = ['Project Type1', 'Limit To UDOT'];

    const config = {
      'Project Type1': {},
      'Project Type2': {},
      'Limit To UDOT': { offByDefault: true },
    };

    expect(allButOffByDefault(state, config)).toBe(false);
  });
});
