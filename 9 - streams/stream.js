const { createReadStream } = require("fs");

// Better for big data (devided to chunks)

function stream(res) {
  // each chunk have may 90kb
  const stream = createReadStream("../content/bigData.txt", {
    highWaterMark: 90000,
    encoding: "utf8",
  });

  stream.on("data", () => {
    console.log("SENDING CHUNKS");
    stream.pipe(res);
  });

  stream.on("error", (err) => {
    console.log(err);
    res.end(err);
  });
}

module.exports = stream;
