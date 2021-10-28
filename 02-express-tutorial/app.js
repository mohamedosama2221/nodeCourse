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

app.use(express.json());

// app.get("/people/:id", (req, res) => {
//   return res.status(200).json({ success: true, data: { people } });
// });
app.put("/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `there is no person with that ${id}` });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json({ success: true, data: newPerson });
});

app.delete("/people/:id", (req, res) => {
  const { id } = req.params;
  const newPeople = people.filter((p) => p.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("listening");
});
