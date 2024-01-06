var convertToTitle = function(columnNumber) {
if (columnNumber === 0) return null;

let result = "";
while (columnNumber > 0) {
  // mod columnNumber 26 -> 1 % 26 = 1
  let modulo = columnNumber % 26;
  // check how many 26 in the columnNumber -> columnName / 26
  let reminder = parseInt(columnNumber / 26);
  // check if columnNumber % 26 == 0 -> 26
  if (modulo === 0) {
    modulo = 26;
    reminder -= 1;
  }
  // result == string of (64 + columnNumber % 26) + result 
  result = String.fromCharCode(64 + modulo) + result;
  // columnNumber = reminder
  columnNumber = reminder;
} 
// return the result
return result;
};

console.log(convertToTitle(28));