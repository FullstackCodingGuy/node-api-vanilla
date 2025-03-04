const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Middleware and configurations can be set up here

app.get('/', (req, res) => {
    res.send(`Hello, Node Vanilla API!`);
});

app.get("/health", (req, res) => {
    res.send("I'm Good!");
  });

  
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});