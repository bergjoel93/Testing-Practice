const capitalize = require("../capitalize.js");

test("Capitalizes the first letter of the string", () => {
  expect(capitalize("foo")).toBe("Foo");
});

test("The first letter already capitalized. ", () => {
  expect(capitalize("Foo")).toBe("Foo");
});

test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Does not change the rest of the string", () => {
  expect(capitalize("hElLo")).toBe("HElLo");
});

test("throws an error if argument is not a string", () => {
  expect(() => capitalize(123)).toThrow("Expected a string");
});
