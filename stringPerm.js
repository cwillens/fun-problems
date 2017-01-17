var stringPerms = function(string) {
  if (string.length === 1) {
    return [string];
  } 
  var allButLast = string.slice(0, string.length - 1);
  var last = string.slice(string.length - 1);
  var permsAllButLast = stringPerms(allButLast);
  var result = [];
  for (var i = 0; i < permsAllButLast.length; i++) {
    var currentPerm = permsAllButLast[i];
    for (var j = 0; j <= currentPerm.length; j++) {
      result.push(currentPerm.slice(0, j) + last + currentPerm.slice(j));
    }
  }
  return result;
}