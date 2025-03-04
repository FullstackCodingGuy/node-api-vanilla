//Require module
const express = require("express");
// Express Initialize
const app = express();

//create api
app.get("/hello_world", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.send("I'm Good!");
});

const port = 8000;
app.listen(port, () => {
  console.log("listen port 8000");
});
