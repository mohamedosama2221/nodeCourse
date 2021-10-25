const { writeFile, readFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = data;
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = data;
    writeFile(
      "./content/output/article-async.txt",
      `This is Async , Here is the result of first file ${first} :: and second file ${second} , working!`,
      (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      }
    );
  });
});
