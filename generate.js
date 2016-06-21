var fs = require('fs');
var config = require('./config');
var contents = fs.readFileSync(config.ANSWER_FILE_NAME, 'utf-8');

// Remove everything after space in each line
var lines = contents.split('\n');
lines = lines.map(function(line) {
  var indexOfSpace = line.indexOf('　');
  return line.slice(0, indexOfSpace + 1);
});

// Return new array of items in different order
// Consumes the original array
var shuffle = function(arr) {
  var result = [];
  while (arr.length > 0) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomItem = arr[randomIndex];
    arr.splice(randomIndex, 1);
    result.push(randomItem);
  }
  return result;
};
lines = shuffle(lines);

var output = lines.join('\n');
fs.writeFileSync(config.PRACTICE_FILE_NAME, output);