//867 . Transpose Matrix

var transpose = function (matrix) {
  const m = matrix.length; // rows
  const n = matrix[0].length; // columns
  const result = []; // new matrix

  // loop through columns
  for (let i = 0; i < n; i++) {
    const row = [];
    // loop through rows
    for (let j = 0; j < m; j++) {
      // push the value of the current row and column into the new matrix
      row.push(matrix[j][i]);
    }
    // push the row into the new matrix
    result.push(row);
  }
  return result;
};
