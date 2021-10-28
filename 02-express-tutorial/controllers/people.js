let { people } = require("../data");

const getPeople = (req, res) => {
  return res.status(200).json({ success: true, data: people });
};

const addPeople = (req, res) => {
  const { name } = req.body;

  if (!name)
    return res.status(400).json({ success: false, msg: "please add a name" });

  return res.status(201).json({ success: true, person: name });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const newPeople = people.filter((p) => p.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  addPeople,
  updatePeople,
  deletePeople,
};
