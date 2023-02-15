//832 Flipping an image

var flipAndInvertImage = function (image) {
  // lat nguoc tung hang cua ma tran
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
  }
  // doi 0 thanh 1 va 1 thanh 0
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[0].length; j++) {
      if (image[i][j] == 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
    }
  }
  return image;
};
