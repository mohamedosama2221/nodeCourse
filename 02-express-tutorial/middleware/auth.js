module.exports.auth = (req, res, next) => {
  const { user } = req.query;
  if (user) {
    req.user = { name: user, id: 265 };
    next();
  } else {
    res.status(401).send("<h1>unauthorized</h1>");
  }
};
