const express = require("express");
const morgan = require("morgan");
const { db } = require('./models');
const app = express();
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));
app.use('/main', require('./router/routes'));

  app.get("/", (req, res) => {
    res.redirect("/main");
  });

app.listen("3000", () => console.log("Listening on Port 3000"));
