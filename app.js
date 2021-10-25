const { readFileSync, writeFileSync } = require("fs");

const firstContext = readFileSync("./content/first.txt", "utf8");
const secondContext = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/output/article.txt",
  `Here is the result of first file ${firstContext} :: and second file ${secondContext}`,
  { flags: "a" }
);
