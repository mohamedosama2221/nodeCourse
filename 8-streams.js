const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile.txt", {
  encoding: "utf8",
  highWaterMark: 9000,
});
stream.on("data", (res) => {
  console.log(res);
});
