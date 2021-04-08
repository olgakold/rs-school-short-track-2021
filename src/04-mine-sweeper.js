function minesweeper (matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const resultRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let str = '';
      if (i - 1 < 0) {
        str = `${matrix[i][j - 1]} ${matrix[i][j + 1]} ${matrix[i + 1][j - 1]} ${matrix[i + 1][j]} ${matrix[i + 1][j + 1]}`;
      }
      if (i + 1 === matrix.length) {
        str = `${matrix[i - 1][j - 1]} ${matrix[i - 1][j]} ${matrix[i - 1][j + 1]} ${matrix[i][j - 1]} ${matrix[i][j + 1]}`;
      }
      if (i > 0 && i < matrix.length - 1) {
        str = `${matrix[i - 1][j - 1]} ${matrix[i - 1][j]} ${matrix[i - 1][j + 1]} ${matrix[i][j - 1]} ${matrix[i][j + 1]} ${matrix[i + 1][j - 1]} ${matrix[i + 1][j]} ${matrix[i + 1][j + 1]}`;
      }

      const arr1 = str.split(' ');
      const arr2 = arr1.filter((elem) => elem === 'true');
      resultRow.push(arr2.length);
    }
    result.push(resultRow);
  }
  return result;
}

module.exports = minesweeper;
