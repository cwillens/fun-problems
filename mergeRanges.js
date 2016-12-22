var mergeRanges = function(meetingsArray) {
  var output = meetingsArray.slice();
  for (var i = 0; i < meetingsArray.length; i++) {
    var meeting = meetingsArray[i];
    for (var j = 0; j < output.length; j++) {
      //overlap
      if ((meeting.startTime >= output[j].startTime && meeting.startTime <= output[j].endTime) ||
           meeting.endTime >= output[j].startTime && meeting.endTime <= output[j].endTime) {
        meeting = {startTime: Math.min(meeting.startTime, output[j].startTime), endTime: Math.max(meeting.endTime, output[j].endTime)};
        output[j] = null;
      }
    }
    output.push(meeting);
  }
  return output;
}