var nFib = function(n) {
  var first = 0;
  var second = 1;
  for (var i = 2; i <= n; i++) {
    var temp = second;
    second += first;
    first = temp;
  }
  return second;
}