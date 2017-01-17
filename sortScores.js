var sortScores = function(scores, highScore) {
  var scoreCount = [];
  var output = [];
  for (var i = 0; i < scores.length; i++) {
    scoreCount[scores[i]] = scoreCount[scores[i]] + 1 || 1;
  }
  for (var i = 0; i <= highScore; i++) {
    if (scoreCount[i] > 0) {
      for (var j = 0; j < scoreCount[i]; j++) {
        output.push(i);
      }
    }
  }
  return output;
}