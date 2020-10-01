const express = require("express");
const wikiRouter = express.Router();
const index = require("../views/index");
const { Page } = require("../models");




wikiRouter.get("/", (req, res) => {
  res.send(index.main());
});

wikiRouter.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
Page.beforeCreate(req.body);

  try {
    const page = await Page.create({
      title: req.body.title,
      slug: req.body.title,
      content: req.body.content
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});



wikiRouter.get("/add", (req, res) => {
  res.send(index.addPage());
});



module.exports = wikiRouter;
