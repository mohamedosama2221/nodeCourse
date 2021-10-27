//res.end() is important to be used at the end of the request to give the server the green light that the response has ben done and finished it end the communication
const http = require("http");

const server = http.createServer();
const { readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html", "utf8");
const stylePage = readFileSync("./navbar-app/styles.css");
const logicPage = readFileSync("./navbar-app/browser-app.js");
const logoPage = readFileSync("./navbar-app/logo.svg");
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      // contentType: "application/json",
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, {
      // contentType: "application/json",
      "content-type": "text/css",
    });
    res.write(stylePage);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logoPage);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(logicPage);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1 style="color: red;">page not found</h1>');
    res.end();
  }
});

server.listen(5000);
