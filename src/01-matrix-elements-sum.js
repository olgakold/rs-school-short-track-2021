function getMatrixElementsSum (matrix) {
  let sum = 0;
  let numberColumns = 0;
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      numberColumns = matrix[i].length;
      arr.push(matrix[i][j]);
    }
  }

  if (arr.lastIndexOf(0) !== -1) {
    for (let m = 0; m < Math.floor(arr.lastIndexOf(0) / numberColumns) * numberColumns; m++) {
      sum += arr[m];
    }
  } else {
    for (let m = 0; m < arr.length; m++) {
      sum += arr[m];
    }
  }

  return sum;
}

module.exports = getMatrixElementsSum;
