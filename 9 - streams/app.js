const stream = require("./stream");
//require("./createBigFile");

// SERVER
const http = require("http");

// request and response
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request event");

  if (req.url === "/data") {
    // Streamed data in chunks
    stream(res);
  } else if (req.url === "/") {
    res.end("Navigate to /data to see the stream output");
  } else {
    res.end("no data");
  }
});

server.listen(5000, () => {
  console.log("Server listening on 5000");
});
