/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

// arr is the array of objects, where each object has an id property.
// We use arr.map(obj => obj.id) to create a new array that contains only the id values from each object in the original array.
// We pass the array of id values to the Set constructor to create a new Set object. The Set object automatically removes any duplicate values, leaving only the unique id values.
// We use Array.from() to convert the Set object back into an array of unique id values.
// Finally, we use join(',') to join the array elements into a comma-separated string.
// const stringifyId = (arr) => {
//     return uniqueIds = Array.from(new Set(arr.map(obj => obj.id))).join(', ');
// };

// The funciton below uses the spread operator to turn the set into an array.
const stringifyId = (arr) => {
    const uniqueIds = [...new Set(arr.map(obj => obj.id))].join(', ');
    return uniqueIds;
  };

module.exports = stringifyId;
