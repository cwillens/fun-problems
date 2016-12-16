var highestProduct = function(integerArray) {
  //return highest product of 3 of integers
  var newArray = integerArray.slice().sort(function(a, b) {
    return (a-b);
  });
  return Math.max(newArray[newArray.length - 1] * newArray[newArray.length - 2] * newArray[newArray.length - 3],
    newArray[0] * newArray[1] * newArray[newArray.length - 1]);
}