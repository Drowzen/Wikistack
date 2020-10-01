const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

try {
  app.get("/", (req, res) => {
    res.send("Hello");
  });
} catch (error) {
  console.log(error);
}

app.listen("1337", () => console.log("Listening on Port 1337"));
