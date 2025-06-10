const { readFile, writeFile } = require('fs');

const filePath1 = '../content/test.txt';
const filePath2 = '../content/subfolder/test2.txt';


readFile(
  filePath1,
  'utf-8',
  (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    const reading1 = Date.now();
    console.log('READING 1 SUCCESSFULLY');
    console.log(reading1);
    const first = result;

    readFile(
      filePath2,
      'utf-8',
      (err2, result2) => {
        if(err2) {
          console.log(err2)
          return
        }
        console.log('READING 2 SUCCESSFULLY');
        console.log(Date.now());
        const second = result2;

        writeFile(
          '../content/result-async.txt',
          `this is the async sum of two files: ${first}, ${second}`,
          (err3) => {
            if(err3) {
              console.log(err3)
              return
            }
            const writingTime = Date.now();
            console.log('WRITING SUCCESSFULLY');
            console.log(writingTime);
            console.log('---------------------');

            const resultTIme = (writingTime - reading1) + 'ms';
            console.log('It took: ' + resultTIme)
          }
        )
      }
    )
  }
)
