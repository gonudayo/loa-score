const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());

app.use("/char", require("./routes/char"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
