const { writeFile } = require("fs").promises;

async function create() {
  try {
    let longText = "";
    for (let i = 0; i < 100; i++) {
      longText += `This is the new sentense number ${i}\n. `;
    }

    await writeFile(`../content/bigData.txt`, longText, {
      flag: "a",
    });

    console.log("--- FILE CREATED ---");
  } catch (error) {
    console.log(error);
  }
}

create();
