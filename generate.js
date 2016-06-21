// Given an array of weighted items, randomly select and print in practice style

// weighted item = [ item, weight ]
// weight = 0.00 ~ 1.00
// all items initially set to 0.5
// if gotten correct, weight multiplied by 0.9
// if gotten wrong, weight multiplied by 1.2 (but capped at 1.00)

// To weigh correctly:
// Select random number from 0 to sumWeights
// Each item is assigned a range from some number i to i+itemWeight in the sumWeights range

var fs = require('fs');
var contents = fs.readFileSync('manual_list.txt', 'utf-8');

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
fs.writeFileSync('OUTPUT.txt', output);