//app.get
//app.post
//app.delete
//app.put
//app.all
//app.listen
//app.use
const express = require("express");
// const path = require("path");

const app = express();

app.use(express.static("./public"));

app.listen(5000, () => {
  console.log("listening");
});
// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "./navbar-app/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("<h1>Oops not found!</h1>");
});
