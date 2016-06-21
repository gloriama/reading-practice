var fs = require('fs');
var config = require('./config');
var answerContents = fs.readFileSync(config.ANSWER_FILE_NAME, 'utf-8');
var practiceContents = fs.readFileSync(config.PRACTICE_FILE_NAME, 'utf-8');

var answers = answerContents.split('\n').reduce(function(acc, answerLine) {
  var questionAnswer = answerLine.split('　'); // two-tuple
  var question = questionAnswer[0];
  var answer = questionAnswer[1];
  acc[question] = answer;
  return acc;
}, {});

var practiceLines = practiceContents.split('\n');
console.log(practiceLines.reduce(function(acc, practiceLine, i) {
  var questionAnswer = practiceLine.split('　'); // two-tuple
  var question = questionAnswer[0];
  var answer = questionAnswer[1];
  if (answer !== answers[question]) {
    acc.push((i+1).toString() + ': ' + practiceLine + ' --> ' + answers[question]);
  }
  return acc;
}, []).join('\n'));