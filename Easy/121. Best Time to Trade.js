var maxProfit = function(prices) {
  let l = 0, r = 1;
  let maxIncome = 0;
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      let income = prices[r] - prices[l];
      maxIncome = Math.max(maxIncome, income);
    } else {
      l = r;
    }
    r++
  }
  return maxIncome;
};

// let prices = [7,1,5,3,6,4];
// let prices = [7,6,4,3,1];
// let prices = [2,4,1];
// let prices = [2,1,2,1,0,1,2];
console.log(maxProfit(prices))