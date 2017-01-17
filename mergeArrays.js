var mergeArrays = function(array1, array2) {
  var output = [];
  var pointer1 = 0;
  var pointer2 = 0;

  while (pointer1 < array1.length || pointer2 < array2.length) {
    var current1 = array1[pointer1];
    var current2 = array2[pointer2];
    if (pointer1 < array1.length && pointer2 < array2.length) {
      if (current1 < current2) {
        output.push(current1);
        pointer1 ++;
      } else {
        output.push(current2);
        pointer2 ++;
      }
    } else if (pointer1 < array1.length) {
      output.push(current1);
      pointer1 ++;
    } else {
      output.push(current2);
      pointer2 ++;
    }
  } 
  return output;
}