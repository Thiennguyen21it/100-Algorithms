//447. Number of Boomerangs

var numberOfBoomerangs = function (points) {
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    let map = {};
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      let distance = getDistance(points[i], points[j]);
      if (map[distance] === undefined) {
        map[distance] = 1;
      } else {
        count += map[distance] * 2;
        map[distance]++;
      }
    }
  }
  var getDistance = function (point1, point2) {
    return (
      Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
    );
  };
  return count;
};
