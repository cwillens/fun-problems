var bracketValidator = function(string) {
  var bracketStack = [];
  var map = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  };
  for (var i = 0; i < string.length; i++) {
    if ('({['.indexOf(string[i]) > -1) {
      bracketStack.push(string[i]);
    } else if (')}]'.indexOf(string[i]) > -1) {
      if (bracketStack[bracketStack.length - 1] !== map[string[i]]) {
        return false;
      } else {
        bracketStack.pop();
      }
    }
  }
  if (bracketStack.length > 0) {
    console.log('wtfff', bracketStack);
  } else {
    return true;
  }
}