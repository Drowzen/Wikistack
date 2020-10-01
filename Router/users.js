const express = require("express");
const userRouter = express.Router();
const index = require("../views/index");

userRouter.get("/users", (req, res) => {
  res.send(index.userPages());
});

module.exports = userRouter;
