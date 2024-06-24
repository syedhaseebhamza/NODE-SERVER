const http = require("http");
const fs = require("fs");

const bookCollection = [
  "Harry Potter and the Sorcerer's Stone",
  "The Hunger Games",
  "The Perks of Being a Wallflower",
  "Wolf Hall",
];

const server = http.createServer((req, res) => {
  fs.writeFile("./books.txt", "BOOK COLLECTION\n", (err) => {
    if (err) {
      console.log("ERROR");
    } else {
      res.end("File Write Successfully");
      const randomBooks =
        bookCollection[Math.floor(Math.random() * bookCollection.length)] +
        "\n";
      fs.appendFile("./books.txt", randomBooks, (err) => {
        if (err) {
          console.log("ERROR");
        } else {
          res.end("File Update Successfully");
        }
      });
    }
  });
});

server.listen(8002, () => console.log("server start!!!"));
