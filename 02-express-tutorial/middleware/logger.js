module.exports.logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); //must must send either the res itself or next to pass it to the next middleware function
};
