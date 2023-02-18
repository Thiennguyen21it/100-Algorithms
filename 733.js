//733. Flood Fill

var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  let oldColor = image[sr][sc];
  let dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= image.length ||
      j >= image[0].length ||
      image[i][j] !== oldColor
    )
      return;
    image[i][j] = color;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  dfs(sr, sc);
  return image;
};
