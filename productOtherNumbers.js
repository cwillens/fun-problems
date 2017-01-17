var productOtherNumbers = function(inputArray) {
  var output = [];
  var currentProd = 1;
  for (var i = 0; i < inputArray.length; i++) {
    output.push(currentProd);
    currentProd *= inputArray[i];
  }
  var currentProd = 1;
  for (var i = inputArray.length - 1; i >= 0; i--) {
    output[i] *= currentProd;
    currentProd *= inputArray[i];
  }

  return output;
}