/**
 * A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
 */
import Calculator from "../calculator";
const calculator = new Calculator();

test("Adding two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtracting two numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Multiplying two numbers", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("Dividing two numbers", () => {
  expect(calculator.divide(100, 10)).toBe(10);
});

test("Dividing by zero.", () => {
  expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
});
