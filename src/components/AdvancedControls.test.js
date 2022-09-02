import { describe, expect, it } from 'vitest';
import { getAll } from './AdvancedControls';

describe('getAll', () => {
  it('should return true if all are selected', () => {
    const state = ['Project Type1', 'Project Type2', 'Limit To UDOT'];

    const config = {
      'Project Type1': {},
      'Project Type2': {},
      'Limit To UDOT': {},
    };

    expect(getAll(state, config)).toBe(true);
  });

  it('should return false if any are unselected', () => {
    const state = ['Project Type1', 'Limit To UDOT'];

    const config = {
      'Project Type1': {},
      'Project Type2': {},
      'Limit To UDOT': {},
    };

    expect(getAll(state, config)).toBe(false);
  });
});
