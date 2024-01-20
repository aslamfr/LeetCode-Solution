var reverseBits = function(n) {
  if (!n) return 0;

  let reverse = ""; result = 0;
  let len = n.length
  for (let i = 0; i < len; i++) {
    reverse = reverse+  n.slice(-1);
    n = n.slice(0, -1);
  }
  result = parseInt(reverse, 2);
  return `${result} (${reverse})`
};

let n = "00000010100101000001111010011100";

console.log(reverseBits(n));