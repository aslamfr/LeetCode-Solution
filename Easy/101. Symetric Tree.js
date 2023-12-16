// check left and rigth
// if (left sub node === right sub nodes) return true
// if (right sub node === left sub nodes) return true
// else false
//recursive for next sub node.

var isSymmetric = function(root) {
  if (root == null) return true;
  return isSame(root.left, root.right);
};

var isSame = function(rootL, rootR) {
  if (!rootL && !rootR) return true;
  if ((!rootL && rootR) || (rootL && !rootR)) return false;
  if ((rootL.val !== rootR.val)) return false;
  if (rootL && rootR) {
    return isSame(rootL.left, rootR.right) && isSame(rootL.right, rootR.left);
  }
  return ture;
}
