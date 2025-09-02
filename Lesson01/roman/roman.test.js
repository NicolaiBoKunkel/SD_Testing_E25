const { romanToDecimal } = require("./roman");

describe("Roman to Decimal Converter", () => {
  test("converts single numerals", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("V")).toBe(5);
    expect(romanToDecimal("X")).toBe(10);
    expect(romanToDecimal("L")).toBe(50);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("D")).toBe(500);
    expect(romanToDecimal("M")).toBe(1000);
  });

  test("converts additive numerals", () => {
    expect(romanToDecimal("II")).toBe(2);
    expect(romanToDecimal("VIII")).toBe(8);
    expect(romanToDecimal("XV")).toBe(15);
    expect(romanToDecimal("MDCCCLXVII")).toBe(1867);
  });

  test("converts subtractive numerals", () => {
    expect(romanToDecimal("IV")).toBe(4);
    expect(romanToDecimal("IX")).toBe(9);
    expect(romanToDecimal("XL")).toBe(40);
    expect(romanToDecimal("XC")).toBe(90);
    expect(romanToDecimal("CD")).toBe(400);
    expect(romanToDecimal("CM")).toBe(900);
    expect(romanToDecimal("XCIV")).toBe(94);
    expect(romanToDecimal("MMMCMXCIX")).toBe(3999);
  });

  test("throws error on invalid numerals", () => {
    expect(() => romanToDecimal("")).toThrow();
    expect(() => romanToDecimal("IIII")).toThrow();
    expect(() => romanToDecimal("VV")).toThrow();
    expect(() => romanToDecimal("ABC")).toThrow();
    expect(() => romanToDecimal("MMMM")).toThrow();
  });
});
