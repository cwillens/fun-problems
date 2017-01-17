var longestPossiblePal = function(inputString) {
  var inputArray = inputString.split('');
  inputArray.sort();
  var sortedString = inputArray.join('');
  var earliestSingle = '';
  var currentCount = 0;
  var currentValue = sortedString[sortedString.length - 1];
  var output = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    if (sortedString[i] === currentValue) {
      currentCount ++;
      if (currentCount%2 === 0) {
        output = currentValue + output + currentValue;
      }
    } else {
      if (currentCount%2 === 1) {
        earliestSingle = currentValue;
      }
      currentValue = sortedString[i];
      currentCount = 1;
    }
  }
  if (earliestSingle !== '') {
    output = output.slice(0, output.length / 2) + earliestSingle + output.slice(output.length / 2);
  }
  return output;
}