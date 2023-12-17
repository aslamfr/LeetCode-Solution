var isPalindrome = function(s) {
  let str = s.trim().replaceAll(" ", '').replace(/[^A-Za-z0-9]/g,"").toLowerCase();
  // console.log(str);

  if (str === "") return true;

  let l = 0, r = str.length-1;
  while (l <= r) {
    if (str[l] !== str[r]) {
      return false
    } 
    l++;
    r--;
  } 
  return true
};

// let s = "A man, a plan, a canal: Panama";
// let s = "race a car";
let s = " ";
console.log(isPalindrome(s));