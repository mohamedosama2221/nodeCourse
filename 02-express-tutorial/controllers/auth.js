const login = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(200).send("<h1>please provide a value</h1>");
  }
  return res.status(200).send(`<h1>welcome ${name}</h1>`);
};

module.exports = login;
