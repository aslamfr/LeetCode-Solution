var titleToNumber = function(columnTitle) {
  if (!columnTitle) return null;

  let result = 0;

  for(let i = 0; i < columnTitle.length; i++) {
    const curr_letter = columnTitle[i];
    const curr_num = curr_letter.charCodeAt(0) - 64;
    
    result += curr_num * Math.pow(26, columnTitle.length - i - 1);
  }
  
  return result;
};

console.log(titleToNumber('ZY'));
// console.log("A".length)