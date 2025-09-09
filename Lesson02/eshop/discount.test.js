const { calculateDiscountPercent } = require('./discount');

describe('calculateDiscountPercent', () => {
  // Valid – EP reps & BVA
  test('0.01 → 0%', () => {
    expect(calculateDiscountPercent(0.01)).toBe(0);
  });

  test('100.00 → 0%', () => {
    expect(calculateDiscountPercent(100.00)).toBe(0);
  });

  test('299.99 → 0%', () => {
    expect(calculateDiscountPercent(299.99)).toBe(0);
  });

  test('300.00 → 0%', () => {
    expect(calculateDiscountPercent(300.00)).toBe(0);
  });

  test('300.01 → 5%', () => {
    expect(calculateDiscountPercent(300.01)).toBe(5);
  });

  test('500.00 → 5%', () => {
    expect(calculateDiscountPercent(500.00)).toBe(5);
  });

  test('799.99 → 5%', () => {
    expect(calculateDiscountPercent(799.99)).toBe(5);
  });

  test('800.00 → 5%', () => {
    expect(calculateDiscountPercent(800.00)).toBe(5);
  });

  test('800.01 → 10%', () => {
    expect(calculateDiscountPercent(800.01)).toBe(10);
  });

  test('1000.00 → 10%', () => {
    expect(calculateDiscountPercent(1000.00)).toBe(10);
  });

  test('1000000.00 → 10%', () => {
    expect(calculateDiscountPercent(1000000.00)).toBe(10);
  });

  // Invalid – amount ≤ 0
  test('0.00 → reject', () => {
    expect(() => calculateDiscountPercent(0.00)).toThrow(/positive/);
  });

  test('-1.00 → reject', () => {
    expect(() => calculateDiscountPercent(-1.00)).toThrow(/positive/);
  });

  // Invalid – precision > 2 decimals
  test('100.001 → reject precision', () => {
    expect(() => calculateDiscountPercent(100.001)).toThrow(/decimal/);
  });

  test('300.005 → reject precision', () => {
    expect(() => calculateDiscountPercent(300.005)).toThrow(/decimal/);
  });

  // Invalid – non-finite / non-number
  test('NaN → reject', () => {
    expect(() => calculateDiscountPercent(NaN)).toThrow(/finite number/);
  });

  test('Infinity → reject', () => {
    expect(() => calculateDiscountPercent(Infinity)).toThrow(/finite number/);
  });
});
