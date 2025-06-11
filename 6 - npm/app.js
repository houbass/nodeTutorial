const http = require("http");

// request and response
const server = http.createServer((req, res) => {
  if (req.url === "/check") {
    res.end("check mate");
  } else if (req.url === "/") {
    res.end("Welcome mate");
  } else {
    res.end("no data");
  }
});

server.listen(5000);
