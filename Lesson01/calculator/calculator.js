function sum(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return number1 / number2;
}

module.exports = { sum, subtract, multiply, divide };
