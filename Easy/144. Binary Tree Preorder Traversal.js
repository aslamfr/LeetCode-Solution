var preorderTraversal = function(root) {
  let point = root;
  let stack = [];
  let result = [];
  while (point || stack.length) {
    while (point) {
      stack.push(point);
      result.push(point.val);
      console.log(result, "left");
      point = point.left;
    }
    point = stack.pop();
    point = point.right;
  }
  return result;
};

// similar to inorder but record the result when before moving left.