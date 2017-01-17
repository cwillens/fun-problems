var inOrder = function(tree, callback) {
  if (tree.left) {
    inOrder(tree.left);
  } 
  callback(tree.val);
  if (tree.right) {
    inOrder(tree.right);
  }
}

var preOrder = function(tree, callback) {
  callback(tree.val);
  if (tree.left) {
    preOrder(tree.left);
  } 
  if (tree.right) {
    preOrder(tree.right);
  }
}


var postOrder = function(tree, callback) {
  if (tree.left) {
    postOrder(tree.left);
  } 
  if (tree.right) {
    postOrder(tree.right);
  }
  callback(tree.val);
}