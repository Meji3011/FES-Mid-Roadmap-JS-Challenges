/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

// const maxCharacter = (str) => {
//   const charArray = str.split("");
//   const characterArr = [];

//   charArray.forEach((char) => {
//     const foundChar = characterArr.find((item) => item.char === char);
//     if (foundChar) {
//       foundChar.count++;
//     } else {
//       characterArr.push({ char, count: 1 });
//     }
//   });

//   let maxCount = 0;
//   let maxChars = [];
//   characterArr.forEach((item) => {
//     if (item.count > maxCount) {
//       maxCount = item.count;
//       maxChars = [item.char];
//     } else if (item.count === maxCount) {
//       maxChars.push(item.char);
//     }
//   });

//   return maxChars.join(', ');
// };

// We create an object called charCount to store the character counts.
// We iterate through each character in the string using a for...of loop.
// For each character, we update its count in charCount. If the character doesn't exist in charCount, we initialize its count to 0 and then increment it by 1. This is achieved by the expression charCount[char] = (charCount[char] || 0) + 1.
// After counting the occurrences of each character, we initialize maxCount to 0 and maxChars to an empty array.
// We iterate through the properties (characters) of charCount using a for...in loop.
// If the count of the current character is greater than maxCount, we update maxCount and set maxChars to an array containing only the current character.
// If the count of the current character is equal to maxCount, we append the current character to maxChars.
// Finally, we join the characters in maxChars using join(', ') and return the resulting string.

// To understand the charCount[char] = (charCount[char] || 0) + 1 step. Please read the following explanation.
// charCount[char] retrieves the current count of the character from the charCount object. If the character doesn't exist as a property in charCount, it returns undefined.
// (charCount[char] || 0) is a logical OR operation. It evaluates to the value of charCount[char] if it is truthy (i.e., not undefined, null, 0, false, or an empty string). If charCount[char] is falsy (i.e., undefined for a character that hasn't been encountered before), it evaluates to 0.
// (charCount[char] || 0) + 1 increments the count of the character by 1. If the character doesn't exist in charCount, it initializes its count to 0 and then increments it to 1.
// Finally, the updated count is assigned back to charCount[char], effectively updating the count of the character in the charCount object.

// The solution I found also takes into account if there are multiple characters that all share the same amount of maxCount.

// function maxCharacter(str) {
//   const charMap = {};

//   // Count the occurrences of each character
//   for (let char of str) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   // console.log(charMap);
//   // This console logs the array with the character and the character count.

//   let maxCount = 0;
//   let maxChars = [];

//   // Find the character(s) with the maximum count
//   for (let char in charMap) {
//     if (charMap[char] > maxCount) {
//       maxCount = charMap[char];
//       maxChars = [char];
//     } else if (charMap[char] === maxCount) {
//       maxChars.push(char);
//     }
//   }

//   return maxChars.join(", ");
// }

function maxCharacter(str) {
    const charMap = new Map();
  
    // Count the occurrences of each character
    for (const char of str) {
      charMap.set(char, (charMap.get(char) || 0) + 1);
    }
  
    let maxCount = 0;
    let maxChars = [];
  
    // Find the character(s) with the maximum count
    for (const [char, count] of charMap) {
      if (count > maxCount) {
        maxCount = count;
        maxChars = [char];
      } else if (count === maxCount) {
        maxChars.push(char);
      }
    }
  
    return maxChars.join(', ');
  }

module.exports = maxCharacter;
