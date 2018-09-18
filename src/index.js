module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s+/g, '');
  equation = equation.replace("x^2", "");
  equation = equation.replace("x", "");
  let arr = equation.split("*");
  let d = arr[1]*arr[1] - 4*arr[0]*arr[2];
  let solution = [];
  for(let i = 0; i < arr.length; i++)
      arr[i] = Number(arr[i]);
  solution[0] = Math.round((-arr[1] - Math.sqrt(d)) / (2*arr[0]))
  solution[1] = Math.round((-arr[1] + Math.sqrt(d)) / (2*arr[0]));
  solution.sort(function(a, b){
      return a - b;
  });
  return solution;
}
