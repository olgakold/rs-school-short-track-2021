/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let k = 0;
  const arr2 = [...arr].sort((a, b) => a - b);
  const arr3 = [];
  while (arr2.indexOf(-1) !== -1) {
    arr2.shift();
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr3.push(-1);
    } else {
      arr3.push(arr2[k]);
      k++;
    }
  }

  return arr3;
}

module.exports = sortByHeight;
