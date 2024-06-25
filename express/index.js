import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("HomePage");
});
app.get("/about", (req, res) => {
  return res.send("AboutPAge");
});

app.listen(3001, () => console.log("server start !"));
