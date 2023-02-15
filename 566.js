//566. Reshape the Matrix

var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;
  const result = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row.push(mat[i][j]);
      if (row.length === c) {
        result.push(row);
        row = [];
      }
    }
  }
  return result;
};
