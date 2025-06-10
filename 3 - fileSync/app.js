const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('../content/test.txt', 'utf8');
const second = readFileSync('../content/subfolder/test2.txt', 'utf-8');

console.log('first file: ' + first);
console.log('second file: ' + second);

// this will overwrite the file
writeFileSync(
  '../content/result-sync.txt', 
  `this is the sum of two files: ${first}, ${second}`
);

// this will add new line and update
writeFileSync(
  '../content/result-sync_apend.txt', 
  `this is the sum of two files: ${first}, ${second}`,
  { flag: 'a' }
);