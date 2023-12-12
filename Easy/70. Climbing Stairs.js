function climbStairs(n) {
  // fibonacci series
  let steps = [];
  steps[0] = 0;
  steps[1] = 1;
  steps[2] = 1;

  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i-1] + steps[i-2];
    console.log(steps)
  }
  return steps[n];
}

let n = 4;
climbStairs(4);