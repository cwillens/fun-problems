var alphabetPivot = function(array, addToIndex) {
  var addToIndex = addToIndex || 0;
  var middle = Math.floor(array.length / 2);
  if (middle === 0) {
    return middle + addToIndex;
  }
  if (array[middle] < array[middle - 1]) {
    return middle + addToIndex;
  }
  if (array[middle] < array[0]) {
    return alphabetPivot(array.slice(0, middle), addToIndex);
  } else {
    return alphabetPivot(array.slice(middle+1), addToIndex + middle + 1);
  }
}
