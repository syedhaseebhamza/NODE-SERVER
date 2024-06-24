const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const logData = `${Date.now()} : ${req.url}\n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  fs.appendFile("./logFile.txt", logData, () => {
    switch (myurl.pathname) {
      case "/":
        res.end("home page");
        break;
      case "/about":
        const username = myurl.query.name;
        res.end(`welcome ${username} on about page`);
        break;
      case "/setting":
        res.end("setting page");
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

server.listen(8003, () => console.log("server start!"));
