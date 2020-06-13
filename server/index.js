// require/import express
const express = require("express");

// require body-parser
const parser = require("body-parser");

// instantiate app as an express server
const app = express();
// set port to port 3000
const port = 3000;

// require/import controllers
const controllers = require("./controllers/controllers");

// server public folders to the client
app.use(express.static("./client/dist"));

// use body-parser
app.use(parser.json());

// app get request
app.get("/api/cows", (req, res) => {
  controllers.get(req, res);
});

// app post request
app.post("/api/cows", (req, res) => {
  controllers.post(req, res);
});

app.put("/api/cows", (req, res) => {
  controllers.update(req, res);
});

app.delete("/api/cows", (req, res) => {
  controllers.delete(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
