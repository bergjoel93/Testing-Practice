function reverseString(string) {
  if (typeof string != "string") {
    throw new Error("expected a string");
  }
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string.charAt(i);
  }
  return reverse;
}
module.exports = reverseString;
