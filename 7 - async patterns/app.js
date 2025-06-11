const { readFile, writeFile } = require("fs").promises;
const util = require("util");

//const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

async function start() {
  try {
    //const first = await getText('../content/test.txt');
    //const second = await getText('../content/subfolder/test2.txt');
    const first = await readFile("../content/test.txt", "utf8");
    const second = await readFile("../content/subfolder/test2.txt", "utf8");
    await writeFile(
      "../content/result-async.txt",
      `this is the new sum of two files: ${first}, ${second}`,
      { flag: "a" }
    );

    console.log("--- AWAIT METHOD ---");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
}

start();

// Normal js way
/*
function getText(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}
*/

// Oldschool
/*
getText('../content/test.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err));
*/
