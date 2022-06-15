import { getSymbol } from './utils';

describe('getSymbol', () => {
  it('returns null if no layer', () => {
    expect(getSymbol(null, 'foo')).toBe(null);
  });

  it('returns symbol', () => {
    const value = 'bar';
    const symbol = {};
    const layer = {
      layer: {
        title: 'my layer',
        renderer: {
          uniqueValueInfos: [
            {
              value: 'foo',
              symbol: {},
            },
            {
              value,
              symbol,
            },
          ],
        },
      },
    };

    expect(getSymbol(layer, value)).toBe(symbol);
  });

  it('throws error if no symbol is found', () => {
    const layer = {
      layer: {
        title: 'my layer',
        renderer: {
          uniqueValueInfos: [],
        },
      },
    };

    expect(() => getSymbol(layer, 'foo')).toThrow(/not find/);
  });
});
