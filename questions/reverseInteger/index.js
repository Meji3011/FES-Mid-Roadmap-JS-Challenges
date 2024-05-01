/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

// I first turn the absolute value of int to string and then an array. This allows me to reverse it and join it. Then I check if the original is negative, if it is, then i add a negative sign to keep the sign the same as the original.
// const reverseInteger = (int) => {
//   const reverseIntgerString = Math.abs(int).toString().split("").reverse().join("");
//   const reverseInteger = parseInt(reverseIntgerString);
//   if (int < 0) {
//     return -reverseInteger;
//   }
//   return reverseInteger;
// };

// This is an optimized version of the original that does the same thing as the first function.
const reverseInteger = (int) => {
  const isNegative = int < 0;
  const absoluteInt = Math.abs(int);
  const reversedInt = parseInt(
    absoluteInt.toString().split("").reverse().join("")
  );
  return isNegative ? -reversedInt : reversedInt;
};

module.exports = reverseInteger;
