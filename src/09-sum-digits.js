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
  function getSum (x) {
    let sum = 0;
    x.toString().split('').forEach((element) => {
      sum += parseInt(element, 10);
    });
    return sum;
  }

  if (getSum(n) > 9) {
    return getSum(getSum(n));
  }
  return getSum(n);
}

module.exports = getSumOfDigits;
