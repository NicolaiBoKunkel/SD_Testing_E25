const { sum, subtract, multiply, divide } = require("./calculator");

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-2, 5)).toBe(3);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(0, 7)).toBe(-7);
  });

  test("multiplies tre numbers", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 5)).toBe(0);

  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-9, 3)).toBe(-3);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});
