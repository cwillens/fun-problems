var stepHop = function(n) {
  var count = 0;
  var recurse = function(totalSoFar) {
    if (totalSoFar === n) {
      count ++;
    } else if (totalSoFar > n) {
      return;
    } else {
      recurse(totalSoFar + 1);
      recurse(totalSoFar + 2);
      recurse(totalSoFar + 3);
    }
  }
  for (var i = 1; i <= 3; i++) {
    recurse(i);
  }
  return count;
}