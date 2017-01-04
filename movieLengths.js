var movieLengths = function(flightLength, movieLengths) {
  var lengths = {};
  for (var i = 0; i < movieLengths.length; i++) {
    if (lengths[flightLength - movieLengths[i]]) {
      return true;
    } else {
      lengths[movieLengths[i]] = true;
    }
  }
  return false;
}