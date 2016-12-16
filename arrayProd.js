var arrayProd = function(inputArray) {
  var result = [];
  var currentProd = 1;
  for (var i = 0; i < inputArray.length; i++) {
    result.push(currentProd);
    currentProd *= inputArray[i];
  }
  var currentProd = 1;
  for (var i = inputArray.length - 1; i >= 0; i--) {
    result[i] *= currentProd;
    currentProd *= inputArray[i];
  }
  return result;
}