/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

// const palindrome = (str) => {
//     const revStr = str.split("").reverse().join("");
//     return str === revStr;
//     }
//   };

//   const palindrome = (str) => {
//     revStr = str.split("").reduceRight((accumulator, currentValue) => accumulator + currentValue);
//     return str === revStr;
//   }
// The two methods above uses the solution from reverseString.

// The method below uses the every method. str[str.length - 1 - index] gives the index of the character that needs to be checked. But this will iterated through the entire array when we only need to iterate half of the array to check everything.
// const palindrome = (str) => {
//     return str.split("").every((char, index) => char === str[str.length - 1 - index]);
//   };

// This method finds the middle index of the string, regardless of even or odd amount of total index. This makes the function more efficient because the moment it detects the string to not be a palindrome, it returns false.
const palindrome = (str) => {
  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; ++i) {
    console.log("iterated")
    const oppositeIndex = str.length - 1 - i;
    if (str[i] !== str[oppositeIndex]) {
      return false;
    }
  }

  return true;
};

module.exports = palindrome;
