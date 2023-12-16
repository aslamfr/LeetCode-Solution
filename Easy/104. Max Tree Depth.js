// add the tree to an array
// add depth
// add array length as a constant
// push left subnodes and right subnodes to the array
// remove from 0, [array length] items from the array
// repeat


var maxDepth = function(root) {
  const point = [root]; 
  let depth = 0;

  if (!point) return 0;
  while (point.length !== 0) {
    depth += 1;
    const len = point.length;
    for (let i = 0; i < len; i++) {
      if (point[i].left) point.push(point[i].left);
      if (point[i].right) point.push(point[i].right);
    }
    point.splice(0, len);
  }
  return depth;
};
