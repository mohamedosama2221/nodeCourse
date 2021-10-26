const { createReadStream } = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  const stream = createReadStream("./content/bigFile.txt", {
    encoding: "utf8",
    highWaterMark: 9000,
  });
  stream.on("open", () => {
    stream.pipe(res);
  });
});

server.listen(5000);
