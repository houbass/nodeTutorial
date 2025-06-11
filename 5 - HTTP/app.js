const http = require("http");

// request and response
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request event");

  if (req.url === "/check") {
    res.end("check mate");
  } else if (req.url === "/") {
    res.end("Welcome mate");
  } else {
    res.end("no data");
  }
});

server.listen(5000, () => {
  console.log("Server listening on 5000");
});
