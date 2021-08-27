
const express = require("express");

const router = express.Router();

// add movie
router.post("/add", (req, res) => {
    res.status(201).send("movie add route is working");
});

// get movie
router.get("/:name", (req, res) => {
    res.status(200).send("movie get route is working");
});

module.exports = router;