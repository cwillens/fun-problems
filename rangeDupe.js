var rangeDupe = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  var n = array.length - 1;
  return total - ((Math.pow(n,2) + n) / 2);
}