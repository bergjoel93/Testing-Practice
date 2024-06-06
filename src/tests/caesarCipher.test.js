import caesarCipher from "../caesarCipher";

test("Shift factor or 1", () => {
  expect(caesarCipher("abcdefg", 1)).toBe("bcdefgh");
});

test("Wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Large number shift", () => {
  expect(caesarCipher("abcd", 103)).toBe("zabc");
});

test("Unchanged punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
