const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`Request received and Request Method is: ${req.method}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the basic server!");
});

app.get("/home", (req, res) => {
  res.send("Welcome To Home!");
});

app.get("/json", (req, res) => {
  res.json({
    message: "OK",
  });
});

app.post("/home", (req, res) => {
  res.send("Welcome To Home! You Have Sent a Post Request");
});

app.listen(PORT, () => {
  console.log(`The Server is Up and Running on PORT:${PORT}`);
});
