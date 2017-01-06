  function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {
    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

var MaxStack = function() {
    this.stack = new Stack();
    this.maxArray = [];
}

MaxStack.prototype.push = function(item) {
    this.stack.push(item);
    if (this.maxArray.length === 0) {
        this.maxArray.push(item);
    } else {
        this.maxArray.push(Math.max(item, this.maxArray[this.maxArray.length - 1]));
    }
}

MaxStack.prototype.pop = function() {
    this.maxArray.pop();
    return this.stack.pop();
}

MaxStack.prototype.getMax = function() {
    return this.maxArray[this.maxArray.length - 1];
}

// var test = new MaxStack();
// test.push(1);
// test.push(4);
// test.push(3);
// test.push(89);
// test.push(5);
// console.log(test.getMax());
// test.pop();
// test.pop();
// console.log(test.getMax());