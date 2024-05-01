/** Given a sentence, capitalize the first letter of each word and
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

// const capitalize = (str) => {
//   let strArr = str.split("");
//   strArr[0] = strArr[0].toUpperCase();
//   for (let i = 1; i < strArr.length; ++i) {
//     if (strArr[i - 1] === " ") {
//       strArr[i] = strArr[i].toUpperCase();
//     }
//   }
//   let capitalizedStr = strArr.join("");
//   return capitalizedStr;
// };

// Optimized solution that uses a different logic.
// str.split(" ") looks for " " in the string as condition to split, so a string like "frontend simplified!" will become an array of {[frontend], [simplified!]}.
// then we map the entire array and use charAt(0).toUpperCase() to capitalize the first letter in each element of the array, and using + word.slice(1) to concatenate the rest of the word to the capitalized first letter.
// Then we use join(" ") to add all the space between each lette back while changing the array into a string.

// const capitalize = (str) => {
//     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
//   };

// This method alters the string instead of converting the string into an array. Which results in better efficiency.
const capitalize = (str) => {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
    return result;
  };

module.exports = capitalize;
