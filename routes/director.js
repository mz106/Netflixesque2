
const express = require("express");

const router = express.Router();

// get director movies
router.get("/:director", (req, res) => {
    res.status(200).send("director route is working");
});


module.exports = router;