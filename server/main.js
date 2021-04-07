const express = require("express");
const app = express();

app.get("/hello_world", (req, res) => {
  res.send("First Fetch");
});

app.listen(5000, () => console.log("App Listening on port 5000..."));
