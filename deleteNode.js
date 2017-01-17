function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var deleteNode = function(node) {
  node = node.next;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);