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

var isBinaryTree = function(node, upperBound, lowerBound) {
  if (node.value > upperBound || node.value < lowerBound) {
    return false;
  }
  if (node.right) {
    if (!isBinaryTree(node.right, upperBound, Math.max(lowerBound, node.value))) {
      return false;
    }
  }
  if (node.left) {
    if (!isBinaryTree(node.left, Math.min(node.value, upperBound), lowerBound)) {
      return false;
    }
  }
  return true;
}

var thing = new BinaryTreeNode(8);
thing.insertRight(9);
thing.insertLeft(6);
thing.right.insertLeft(8.5);
thing.left.insertRight(7);
thing.left.insertLeft(7);