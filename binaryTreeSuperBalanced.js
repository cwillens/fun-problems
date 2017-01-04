  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

var superBalanced = function(tree) {
  var depths = [];
  var recurse = function(node, depth) {
    depth ++;
    if (node.left === null && node.right === null) {
      depths.push(depth);
    } else {
      if (node.right) {
        recurse(node.right, depth);
      }
      if (node.left) {
        recurse(node.left, depth);
      }
    }
  }
  recurse(tree, 1);
  depths.sort();
  if (depths[depths.length - 1] - depths[0] > 1) {
    return false;
  } 
  return true;
}

var thing = new BinaryTreeNode(5);
thing.insertRight(3);
thing.insertLeft(3);
thing.right.insertLeft(5);
thing.right.insertRight(7);
thing.right.right.insertLeft(8);