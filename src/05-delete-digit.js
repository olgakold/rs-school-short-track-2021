/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str.slice(0, i) + str.slice(i + 1, str.length), 10));
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

module.exports = deleteDigit;
