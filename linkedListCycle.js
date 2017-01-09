function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new LinkedListNode(value);
  this.tail.next = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  var nodeToDelete = this.head;
  if (this.head.next === null) {
    this.tail = null;
  } 
  this.head = this.head.next;
  return nodeToDelete;
}

var containsCycle = function(listHead) {
  var slowRunner = listHead;
  var fastRunner = listHead.next;
  while (slowRunner && fastRunner) {
    if (slowRunner === fastRunner) {
      return true;
    }
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }
  return false;
}

var a = new LinkedListNode(3);
var b = new LinkedListNode(4);
var c = new LinkedListNode(5);
var d = new LinkedListNode(6);
var e = new LinkedListNode(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = b;
