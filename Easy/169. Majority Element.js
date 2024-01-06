var majorityElement = function(nums) {
  // check if nums existed
  if (!nums) return null;

  let count = {};
  let result = 0, maxCount = 0;

  for (let n of nums) {
    if (!count[n]) {
      count[n] = 1;
    } else {
      count[n] = 1 + count[n];
    }
    result = count[n] > maxCount ? n : result;
    maxCount = Math.max(count[n], maxCount);
  }
  return result
};

// Boyer-Moore
// var majorityElement = function(nums) {

// };

let nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));