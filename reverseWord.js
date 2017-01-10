var reverseWord = function(string) {
  var arrayString = string.split(' ');
  for (var i = 0; i < string.length / 2; i++) {
    var earlierChar = arrayString[i];
    var laterChar = arrayString[arrayString.length - 1 - i];
    arrayString[i] = laterChar;
    arrayString[arrayString.length - 1 - i] = earlierChar;
  }
  return arrayString.join(' ');
}