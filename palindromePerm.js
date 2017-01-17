var palindromePerm = function(string) {
  var characterCount = {};
  var numOdd = 0;
  for (var i = 0; i < string.length; i++) {
    characterCount[string[i]] = characterCount[string[i]] + 1 || 1;
  }
  for (var word in characterCount) {
    if (characterCount[word]%2 !== 0) {
      numOdd ++;
    }
    if (numOdd > 1) {
      return false;
    }
  }
  return true;
}