var maxCakeMoney = function(cakeTypes, capacity) {
  var capacities = [];
  for (var i = 1; i <= capacity; i++) {
    var max = 0;
    for (var j = 0; j < cakeTypes.length; j++) {
      if (i === 1) {
        if (cakeTypes[j].weight === 1) {
          max = Math.max(max, cakeTypes[j].value);
        }
      } else {
        if (capacities[i-1] + cakeTypes[j].weight <= i) {
          max = Math.max(max, capacities[i-1] + cakeTypes[j].value);
        } else if (cakeTypes[j].weight <= i) {
          max = Math.max(max, cakeTypes[j].value);
        }
      }
    }
    capacities[i] = max;
  }
  return capacities[capacity];
}