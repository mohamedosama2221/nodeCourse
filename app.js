const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>this is home</h1>`);
  } else if (req.url === "/about") {
    res.end(`<h1>this is about</h1>`);
  } else if (req.url === "/cart") {
    res.end(`<h1>this is cart</h1>`);
  } else if (req.url === "/contactus") {
    res.end(`<h1>this is contactus</h1>`);
  } else {
    res.end(`<h1>Oops! not found</h1>`);
  }
});

server.listen(5000);
