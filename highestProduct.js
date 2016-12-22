var highestProduct = function(integerArray) {
  //return highest product of 3 of integers
  var highest = Math.max(integerArray[0], integerArray[1]);
  var lowest = Math.min(integerArray[0], integerArray[1]);
  var highest2 = integerArray[0] * integerArray[1];
  var lowest2 = integerArray[0] * integerArray[1];
  var highest3 = null;
  for (var i = 2; i < integerArray.length; i++) {
    highest3 = Math.max(highest2 * integerArray[i], lowest2 * integerArray[i], highest3);
    lowest2 = Math.min(lowest2, lowest * integerArray[i], highest * integerArray[i]);
    highest2 = Math.max(highest2, highest * integerArray[i], lowest * integerArray[i]);
    lowest = Math.min(lowest, integerArray[i]);
    highest = Math.max(highest, integerArray[i]);
  }
  return highest3;
}