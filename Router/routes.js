const express = require("express");
const router = express.Router();
const index = require("../views/index");

router.get("/", (req,res) => {
    res.send(index.main());
})



module.exports = router;