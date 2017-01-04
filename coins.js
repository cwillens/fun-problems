var coins = function(amt, denominations) {
  var ways = 0;
  var recurse = function(total, smallestIndex) {
    if (total - denominations[smallestIndex] === 0) {
      ways ++;
    } else if (total - denominations[smallestIndex] < 0) {
      return;
    } else {
      for (var i = smallestIndex; i < denominations.length; i++) {
        recurse(total - denominations[smallestIndex], i);
      }    
    }
  }
  for (var i = 0; i < denominations.length; i++) {
     recurse(amt, i);
  }
  return ways;
}