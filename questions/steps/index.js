/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

// repeat is a useful method if you want to just print multiple of the same thing.
const steps = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let step = "#".repeat(i);
    let space = " ".repeat(n - i);
    console.log(step + space);
  }
};

module.exports = steps;
