// 682. Baseball Game

var calPoints = function (operations) {
  let score = 0;
  let stack = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      let add = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(add);
      score += add;
    } else if (operations[i] === "D") {
      let double = stack[stack.length - 1] * 2;
      stack.push(double);
      score += double;
    } else if (operations[i] === "C") {
      let remove = stack.pop();
      score -= remove;
    } else {
      stack.push(parseInt(operations[i]));
      score += parseInt(operations[i]);
    }
  }
  return score;
};
