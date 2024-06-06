import AnalyzeArray from "../analyzeArray";

//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

// test average
const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const analyzeArray = new AnalyzeArray(array);
test("Test basic average", () => {
  expect(analyzeArray.average()).toBe(10.5);
});

test("Test min", () => {
  expect(analyzeArray.min()).toBe(1);
});

test("Test max", () => {
  expect(analyzeArray.max()).toBe(20);
});

test("Test length", () => {
  expect(analyzeArray.getLength()).toBe(20);
});
