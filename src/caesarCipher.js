export default function ceasarCipher(string, number) {
  if (number < 0) {
    throw new Error("Shift value must be greater than 0.");
  }
  if (number === 0) {
    return string;
  }
  // find shift result if number is large.
  number = number % 25;
  // only allow positive shift numbers.
  // Convert string to array and unicode.
  let charArray = toUnicode(string);
  let resultArray = [];
  let result;

  // loop through array and do following:
  for (let i = 0; i < charArray.length; i++) {
    let newValue;
    // handle lowercase
    if (charArray[i] >= 65 && charArray[i] <= 90) {
      newValue = charArray[i] + number;
      if (newValue > 90) {
        newValue = 90 - newValue + 65;
      }
      resultArray.push(newValue);
    } else if (charArray[i] >= 97 && charArray[i <= 122]) {
      newValue = charArray[i] + number;
      if (newValue > 122) {
        newValue = 122 - newValue + 97;
      }
      resultArray.push(newValue);
    } else {
      resultArray.push(charArray[i]);
    }

    //loop through charArray and reconstruct string.
  }
  charArray.forEach((code) => {
    result += String.fromCodePoint(code);
  });
  return result;
  // if value is between 65-90 then it's a lower case value.
  // if value is between 97 - 122 then its an uppercase value.
  // handle shift value. first check if shift value is larger than 25. If it is, then we'll use the modulus to figure out what shift value is. so number % 25. The remainder is the shift value.
  // Add shift value to unicode. If it exceeds 90 or 122, then do newValue - 90 or 122. Then add to 65 or 97 respectivly.

  // return updated unicode array. Then create a new string appending the converted unicode to char values.
}
// Helper function to transform string into array of unicode.
function toUnicode(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charCodeAt(i));
  }
  return array;
}

//console.log(toUnicode("ABCDE"));
