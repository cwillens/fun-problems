function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var kthToLastNode = function(k, head) {
  var pointerOne = head;
  var pointerTwo = head;
  var counter = 0;
  while (pointerTwo) {
    if (counter >= k) {
      pointerOne = pointerOne.next;
    }
    pointerTwo = pointerTwo.next;
    counter ++;
  }
  return pointerOne;
}
