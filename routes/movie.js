
const express = require("express");

const router = express.Router();

// add movie
router.post("/add", (req, res) => {
    res.status(201).send("movie add route is working");
});

// get movie buy name
router.get("/:name", (req, res) => {
    res.status(200).send("movie get route is working");
});


//get year movies
router.get("/:year", (req, res) => {
    res.send(200).send("year route working");
});

module.exports = router;