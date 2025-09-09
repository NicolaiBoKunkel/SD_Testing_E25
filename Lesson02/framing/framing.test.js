const { calculateFramingPrice } = require('./framing');

describe('calculateFramingPrice – valid EPs & BVA', () => {
  test('(35, 40) → 3000 (EP-V1)', () => {
    expect(calculateFramingPrice(35, 40)).toBe(3000);
  });

  test('(50, 40) → 3500 (EP-V2)', () => {
    expect(calculateFramingPrice(50, 40)).toBe(3500);
  });

  // Width 30 boundary
  test('(29.9, 40) → reject', () => {
    expect(() => calculateFramingPrice(29.9, 40)).toThrow(/Width/);
  });
  test('(30, 40) → 3000', () => {
    expect(calculateFramingPrice(30, 40)).toBe(3000);
  });
  test('(30.1, 40) → 3000', () => {
    expect(calculateFramingPrice(30.1, 40)).toBe(3000);
  });

  // Width 100 boundary
  test('(99.9, 40) → 3500', () => {
    expect(calculateFramingPrice(99.9, 40)).toBe(3500);
  });
  test('(100, 40) → 3500', () => {
    expect(calculateFramingPrice(100, 40)).toBe(3500);
  });
  test('(100.1, 40) → reject', () => {
    expect(() => calculateFramingPrice(100.1, 40)).toThrow(/Width/);
  });

  // Height 30 boundary
  test('(40, 29.9) → reject', () => {
    expect(() => calculateFramingPrice(40, 29.9)).toThrow(/Height/);
  });
  test('(40, 30) → 3000', () => {
    expect(calculateFramingPrice(40, 30)).toBe(3000);
  });
  test('(40, 30.1) → 3000', () => {
    expect(calculateFramingPrice(40, 30.1)).toBe(3000);
  });

  // Height 60 boundary
  test('(40, 59.9) → 3500', () => {
    expect(calculateFramingPrice(40, 59.9)).toBe(3500);
  });
  test('(40, 60) → 3500', () => {
    expect(calculateFramingPrice(40, 60)).toBe(3500);
  });
  test('(40, 60.1) → reject', () => {
    expect(() => calculateFramingPrice(40, 60.1)).toThrow(/Height/);
  });

  // Area 1600 boundary
  test('(40, 39.975) → area 1599 → 3000', () => {
    expect(calculateFramingPrice(40, 39.975)).toBe(3000);
  });
  test('(40, 40) → area 1600 → 3000', () => {
    expect(calculateFramingPrice(40, 40)).toBe(3000);
  });
  test('(40, 40.025) → area 1601 → 3500', () => {
    expect(calculateFramingPrice(40, 40.025)).toBe(3500);
  });
});

describe('calculateFramingPrice – invalid types / finiteness / zeros', () => {
  test('(0, 40) → reject', () => {
    expect(() => calculateFramingPrice(0, 40)).toThrow(/Width/);
  });
  test('(40, 0) → reject', () => {
    expect(() => calculateFramingPrice(40, 0)).toThrow(/Height/);
  });
  test('(NaN, 40) → reject', () => {
    expect(() => calculateFramingPrice(NaN, 40)).toThrow(/finite number/);
  });
  test('(40, Infinity) → reject', () => {
    expect(() => calculateFramingPrice(40, Infinity)).toThrow(/finite number/);
  });
});
