/**
 * A reverseString function that takes a string and returns it reversed.
 */
const reverseString = require("../reverseString.js");

test("Reverse a string.", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Reverse a palindrome.", () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test("Handles empty string", () => {
  expect(reverseString("")).toBe("");
});

test("throws an error if argument is not a string", () => {
  expect(() => reverseString(123)).toThrow("expected a string");
});
