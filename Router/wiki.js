const express = require("express");
const wikiRouter = express.Router();
const index = require("../views/index");

wikiRouter.get("/", (req, res) => {
  res.send(index.main());
});

wikiRouter.post("/", (req, res) => {
  res.send(index.main());
});

wikiRouter.get("/add", (req, res) => {
  res.send(index.main());
});

module.exports = wikiRouter;
