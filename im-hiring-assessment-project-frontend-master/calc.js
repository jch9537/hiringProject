const fs = require('fs');
const colors = require('colors');
const buffer = fs.readFileSync('grading.json');
const data = JSON.parse(buffer);

const numBareMin = Object.keys(data.bare_min).length;
const numAdv = Object.keys(data.advanced).length;

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);

const sumBareMin = sumValues(data.bare_min);
const sumAdv = sumValues(data.advanced);

const maxEachScore = 3;

const getScore = (sum, num) => (sum / (num * maxEachScore)) * 100;
const ScoreBareMin = getScore(sumBareMin, numBareMin);
const ScoreAdv = getScore(sumAdv, numAdv) * 0.1;
const totalScore = (ScoreBareMin + ScoreAdv) * 0.5;

console.log('\n');
console.log(
  '[SELF] Your Bare Minimum Score is ',
  colors.yellow(ScoreBareMin.toFixed(2)),
  '/',
  '100'.yellow
);
console.log(
  '[SELF] Your Advanced Score is ',
  colors.cyan(ScoreAdv.toFixed(2)),
  '/',
  '10'.cyan
);
console.log('\n');

console.log(
  '[SELF] Your Server Total Score is '.rainbow.underline,
  colors.green.bold.underline(totalScore.toFixed(2)),
  '%'
);
console.log('\n');
console.log('Please record this score to Notion page\n'.green);
console.log('Your self-graded score will be revieiwed'.yellow);
