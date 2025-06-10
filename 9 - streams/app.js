const { createReadStream } = require('fs');

// Better for big data (devided to chunks)
// each chunk have may 90000bites
const stream = createReadStream(
  '../content/bigData.txt',
  { highWaterMark: 90000, encoding: 'utf8' }
);

stream.on('data', (chunk) => {
  console.log(chunk);
})

stream.on('error', (err) => {
  console.log(err);
})