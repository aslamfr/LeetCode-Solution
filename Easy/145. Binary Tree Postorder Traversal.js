var postorderTraversal = function(root) {
  if (!root) return [];
  
  let stack = [root];
  let result = [];
  while (stack.length) {
    const point = stack.pop();
    result.unshift(point.val);
    if (point.left) stack.push(point.left);
    if (point.right) stack.push(point.right);
  }
  return result;
};