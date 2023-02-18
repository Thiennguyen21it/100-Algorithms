//492. Construct the Rectangle

var contructRectangle = function (area) {
  var w = Math.floor(Math.sqrt(area));
  while (area % w !== 0) {
    w--;
  }
  return [area / w, w];
};
