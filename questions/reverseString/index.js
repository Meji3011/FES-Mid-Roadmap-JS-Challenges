/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// The increment solution
// const reverseString = (str) => {
//   let revStr = "";
//   for (let i = 0; i < str.length; ++i) {
//     revStr = str[i] + revStr;
//   }
//   return revStr;
// };

// Increment solution using ES6, where the for loop syntax gets simplified. We can also do let elem of arr for an array.
// const reverseString = (str) => {
//   let revStr = "";
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   return revStr;
// };

// the decrement version of the increment solution.
// const reverseString = (str) => {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// };

// This method uses split to turn the string into an array, reverse it, and then join it to change it from an array back to a string.
// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };

// This solution uses the reduce method for an array, which is a top tech level solution for reverseString. Remember that the currentValue is the element you're adding, and the accumulator is the sum you're adding on to.
// const reverseString = (str) => {
//   let arr = str.split("");
//   const revStr = arr.reduce(
//     (accumulator, currentValue) => currentValue + accumulator,
//     ""
//   );
//   return revStr;
// };

// This solution uses reduceRight, which uses the rightmost element as the initial value, skipping the step for setting an intial value of an empty string "". This also skips using let to define a new array, which makes things easier if we don't need to keep track of the reversed array.
const reverseString = (str) => {
  return str
    .split("")
    .reduceRight((accumulator, currentValue) => accumulator + currentValue);
};

// All methods tested in this file are valid answers.

module.exports = reverseString;
