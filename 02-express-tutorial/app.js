//app.get //read data
//app.post //insert data
//app.delete //delete data
//app.put //update data
//app.all
//app.listen
//app.use

const express = require("express");
const app = express();
let { people } = require("./data");
app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(200).send("<h1>please provide a value</h1>");
  }
  return res.status(200).send(`<h1>welcome ${name}</h1>`);
});

app.get("/api/people", (req, res) => {
  return res.status(200).json({ success: true, data: people });
});

app.use(express.json());

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name)
    return res.status(400).json({ success: false, msg: "please add a name" });

  return res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
