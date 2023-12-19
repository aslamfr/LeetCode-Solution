// // Initial answer
// var singleNumber = function(nums) {
//   if (nums.length === 1) return nums;

//   let store = [];
//   const arr = nums.slice();
//   for (let i = 0; i < arr.length; i++) {
//     if (!store.includes(arr[i])) {
//       store.push(arr[i]);
//       nums.splice(nums.indexOf(arr[i]),1)
//       console.log(nums, store, i);
//     }
//   }
//   for (let j = 0; j < store.length; j++) {
//     if (!nums.includes(store[j])) {
//       return store[j];
//     }
//   }
// };

// // Refactored answer
// var singleNumber = function(nums) {
//   if (nums.length === 1) return nums;

//   let store = [];
//   const arr = nums.slice();
//   for (let i = 0; i < nums.length; i++) {
//     if (!store.includes(nums[i])) {
//       store.push(nums[i]);
//       console.log(nums,nums[i], store, i);
//     } else {
//       store.splice(store.indexOf(nums[i]),1);
//       console.log(nums,nums[i], store, i);
//     }
//   }
//   return store;
// };

// answer using XOR (symbol : ^) 
var singleNumber = function(nums) {
  // Initialize the unique number...
  let uniqNum = 0;
  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
      // Concept of XOR...
      uniqNum = uniqNum ^ nums[idx];
  } return uniqNum;       // Return the unique number...
};

let nums = [2,2,1];
console.log(singleNumber(nums));