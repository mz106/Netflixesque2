
const express = require("express");

const router = express.Router();

//get year movies
router.get("/:year", (req, res) => {
    res.status(200).send("year route working");
});

module.exports = router;