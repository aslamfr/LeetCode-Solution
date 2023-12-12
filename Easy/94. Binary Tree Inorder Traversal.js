function inorderTraversal(root) {
  // recursive
  // let result = [];

  // function inorder(node) {
  //   if (!node) return;
  //   inorder(node.left);
  //   result.push(node.val);
  //   inorder(node.right);
  // }
  // inorder(node);
  // return result;

  // iterative
  let result = [];
  let stack = [];
  let point = root;

  while (point || stack.length) {
    while (point) {
      stack.push(point);
      point = point.left;
    }
    point = stack.pop();
    result.push(point.val);
    point = point.right;
  }
  return result;
}