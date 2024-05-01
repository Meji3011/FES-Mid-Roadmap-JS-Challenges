/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

// After removing spacing and converting the strings to lowercase, we first check if the lengths of both strings are equal. If they have different lengths, they cannot be anagrams, and we return false immediately.
// We create a character count map (charCount) for str1 by iterating over its characters and updating their counts.
// We iterate over the characters of str2 and check each character against the charCount map:
// If a character from str2 doesn't exist in charCount, it means that str2 has a character that str1 doesn't have, and we return false immediately.
// If the character exists in charCount, we decrement its count by 1.
// After the iteration, if all characters from str2 were found in charCount and their counts were decremented to 0, it means that str1 and str2 have the same character counts, and we return true.

// //str1.replace() is a method that returns a new string with some or all matches of a pattern replaced by a replacement. It does not modify the original string.
// // /\s/g is a regular expression pattern that matches any whitespace character:
// // / is the delimiter that indicates the start and end of the regular expression.
// // \s is a special character class that represents any whitespace character, including spaces, tabs, and line breaks.
// // /g is a flag that stands for "global", which means the replacement should be applied to all matches, not just the first one.
// // '' (empty string) is the replacement string. It specifies that each matched whitespace character should be replaced with an empty string, effectively removing it.

// const anagrams = (strA, strB) => {
//   strA = strA.replace(/\s/g, "").toLowerCase();
//   strB = strB.replace(/\s/g, "").toLowerCase();

//   // Check if the lengths are equal
//   if (strA.length !== strB.length) {
//     return false;
//   }

//   // Create character count map for str1
//   const charCount = {};

//   for (const char of strA) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // Check character counts against str2
//   for (const char of strB) {
//     if (!charCount[char]) {
//       return false;
//     }
//     charCount[char]--;
//   }

//   return true;
// };

/**
 * BEST PRACTISE
 * */
// Instead of using mapping, this method is easier to follow.
// replaceAll(" ", "") removes all white spaces.
// toLowerCase() ensures that everything is lower case so capitalization is not an issue.
// split("") changes the string into an array.
// sort() sorts all elements by alphabetical order.
// We can then join it and if the two strings are anagrams, they should be the exact same after being altered via the steps above.
const anagrams = (strA, strB) => {
    return cleanString(strA) === cleanString(strB);
  };
  
  const cleanString = (str) => {
    return str.replaceAll(" ", "").toLowerCase().split("").sort().join("");
  };

module.exports = anagrams;
