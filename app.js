const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const app = express();
const UserRouter = require("./Router/users");
const WikiRouter = require("./Router/wiki");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", WikiRouter);

app.get('/', (req,res) => {
  res.redirect('/wiki');
})

const init = async () => {
  await db.sync({ force: true });
};

app.listen("3001", () => console.log("Listening on Port 3001"));
