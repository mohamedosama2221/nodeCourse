require("./7-emit-event");

const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("welcome");
  }
});

server.listen(5000);
