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

var secondLargest = function(node) {
  var largest = -Infinity;
  var secLargest = -Infinity;

  var recurse = function(nodette) {
    if (nodette.value > secLargest && nodette.value < largest) {
      secLargest = nodette.value;
    } else if (nodette.value > largest) {
      secLargest = largest;
      largest = nodette.value;
    }
    if (nodette.right) {
      recurse(nodette.right);
      //only look at left if there is no right
    } else if (nodette.left) {
      recurse(nodette.left);
    }   
  }
  recurse(node);
  return secLargest;
}

var thing = new BinaryTreeNode(8);
thing.insertRight(9);
thing.insertLeft(6);
thing.right.insertLeft(8.5);
thing.left.insertRight(7);
thing.left.insertLeft(7);