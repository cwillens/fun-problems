function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var reverseLinkedList = function(head) {
  var pointerOne = head;
  var pointerTwo = head.next;
  var pointerThree = pointerTwo.next;
  while (pointerTwo) {
    pointerTwo.next = pointerOne;
    pointerOne = pointerTwo;
    pointerTwo = pointerThree;
    if (pointerTwo) {
      pointerThree = pointerThree.next;  
    }
  }
  return pointerOne;
}