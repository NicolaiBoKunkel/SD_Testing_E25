const { calculateDiscountedPrice } = require("./Printer");

describe("Printer Cartridge Discount Calculation", () => {
  test("throws error for quantity less than 5", () => {
    expect(() => calculateDiscountedPrice(4, 10)).toThrow("Minimum order quantity is 5");
  });

  test("no discount for minimum quantity", () => {
    expect(calculateDiscountedPrice(5, 10)).toBe(50);
  });

  test("no discount for just above minimum", () => {
    expect(calculateDiscountedPrice(6, 10)).toBe(60);
  });

  test("no discount for mid-range quantity", () => {
    expect(calculateDiscountedPrice(50, 10)).toBe(500);
  });

  test("no discount for just below discount threshold", () => {
    expect(calculateDiscountedPrice(99, 10)).toBe(990);
  });

  test("discount for threshold quantity", () => {
    expect(calculateDiscountedPrice(100, 10)).toBe(800);
  });

  test("discount for just above threshold", () => {
    expect(calculateDiscountedPrice(101, 10)).toBe(808);
  });

  test("discount for large quantity", () => {
    expect(calculateDiscountedPrice(150, 10)).toBe(1200);
  });
});