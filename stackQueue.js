var Queue = function() {
  this.inStack = [];
  this.outStack = [];
}

Queue.prototype.enqueue = function(item) {
  this.inStack.push(item);
}

Queue.prototype.dequeue = function() {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
}