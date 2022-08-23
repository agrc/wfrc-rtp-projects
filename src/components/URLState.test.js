import { describe, expect, it } from 'vitest';
import { stateToURLHash, urlHashToState } from './URLState';

describe('stateToURLHash', () => {
  it('returns the correct data', () => {
    expect(stateToURLHash({ a: 1 })).toEqual('a=1');
  });

  it('handles arrays', () => {
    expect(stateToURLHash({ a: ['b', 'c', 'd'] })).toEqual('a=b.c.d');
  });
});

describe('urlHashToState', () => {
  it('returns the correct data', () => {
    expect(urlHashToState('#a=1')).toEqual({ a: 1 });
  });

  it('handles arrays', () => {
    expect(urlHashToState('#a=b.c.d')).toEqual({ a: ['b', 'c', 'd'] });
  });
});
