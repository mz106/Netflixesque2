
const express = require("express");

const router = express.Router();

// register user
router.post("/register", (req, res) => {
    res.status(201).send("the user register route is working");
});

// login user
router.post("/login", (req, res) => {
    res.status(200).send("the user login route is working");
});

// profile user
router.get("/profile", (req, res) => {
    res.status(200).send("the user login route is working");
});

module.exports = router;