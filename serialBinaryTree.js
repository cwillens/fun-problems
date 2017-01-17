var serialize = function(root) {
    var result = [];
    
    sHelper(root, result);
    return result.toString();
};

function sHelper(root, result) {
    if (root === null) {
        result.push('#');
        return;
    }
    
    result.push(root.val);
    sHelper(root.left, result);
    sHelper(root.right, result);
}

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var root1 = new Node(1);
    root1.left = new Node(2);    
    root1.right = new Node(3);

    // root1.left.left = new Node(4);
    // root1.left.right = new Node(5);

    root1.right.left = new Node(4);
    root1.right.right = new Node(5);

    // root1.left.left.left = new Node(8);
    // root1.left.left.right = new Node(9);

    // root1.left.right.right = new Node(10);

    serialize(root1); 