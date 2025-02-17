const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

 function getSumOfDigits(n) {
  const strN = String(n);
  const arrN = strN.split('');
  let sum = 0;

  for (let i = 0; arrN.length > i; i++) {
      sum += (+arrN[i]);
  }

  if (sum > 9) {
      sum = (Math.floor(sum / 10)) + sum % 10
  }

  return sum;
}


getSumOfDigits(91);


module.exports = {
  getSumOfDigits
};