const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const homePage = fs.readFileSync("./index.html");
const contactPage = fs.readFileSync("./contact.html");
const aboutPage = fs.readFileSync("./about.html");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(homePage);
  } else if (req.url == "/contact") {
    res.end(contactPage);
  } else if (req.url == "/about") {
    res.end(aboutPage);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
