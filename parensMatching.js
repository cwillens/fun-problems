var parensMatching = function(string, openIndex) {
  if (string[openIndex] !== '(') {
    return null;
  } 
  var counter = 1;
  for (var i = openIndex + 1; i < string.length; i++) {
    if (string[i] === '(') {
      counter ++;
    } else if (string[i] === ')') {
      counter --;
    }
    if (counter === 0) {
      return i;
    }
  }
  return null;
}