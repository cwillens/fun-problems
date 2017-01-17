var linkedListBackwards = function(node) {
  if (!node.next) {
    console.log(node.value);
  } else {
    linkedListBackwards(node.next);
    console.log(node.value);
  }
}


var Node = function(value) {
  this.value = value;
  this.next = null;
}