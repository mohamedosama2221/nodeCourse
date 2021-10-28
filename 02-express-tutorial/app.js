const express = require("express");
const app = express();
const peopleRouter = require("./router/people");
const authRouter = require("./router/auth");

app.use(express.static("./methods-public"));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/people", peopleRouter);

app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("listening");
});
