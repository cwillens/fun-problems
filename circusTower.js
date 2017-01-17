var circusTower = function(inputArray) {
  //sort input array by height
  inputArray.sort(function(a,b) {
    return (a[0] > b[0]);
  });
  var recurse = function(currentPile, index) {
    if (index === inputArray.length) {
      return currentPile;
    } else {
      if (currentPile[currentPile.length - 1][0] <= inputArray[index][0] && currentPile[currentPile.length - 1][1] <= inputArray[index][1]) {
        return recurse(currentPile.concat([inputArray[index]]), index + 1);
      } else {
        var option1 = recurse(currentPile, index + 1);
        var option2 = recurse(currentPile.slice(0, currentPile.length - 1).concat([inputArray[index]]), index + 1);
        if (option1.length > option2.length) {
          return option1;
        } else {
          return option2;
        }
      }
    }
  }
  return recurse([inputArray[0]], 1);
}