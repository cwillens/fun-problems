var BFS = function(head) {
  var output = [];
  var queue = [head];
  while (queue.length > 0) {
    var currentNode = queue.shift();
    output.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return output;
}