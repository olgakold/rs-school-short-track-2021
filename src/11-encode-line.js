/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum++;
    if (str[i] !== str[i + 1]) {
      if (sum === 1) {
        result += str[i];
      } else {
        result = result + sum + str[i];
      }
      sum = 0;
    }
  }

  return result;
}

module.exports = encodeLine;
