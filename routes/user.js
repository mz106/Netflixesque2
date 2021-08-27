
const express = require("express");

const { addUser } = require("../utils/index");

const router = express.Router();

const addUserRouter = async (req, res, next) => {
    try {
        res.status(201).json({name: req.body.name});
        console.log(req.body.name)
        addUser(req.body.name, req.body.year, req.body.director);
    } catch (error) {
        return next(error);
    }
}; 

// register user
router.post("/register", addUserRouter);

// login user
router.post("/login", (req, res) => {
    res.status(200).send("the user login route is working");
});

// profile user
router.get("/profile", (req, res) => {
    res.status(200).send("the user login route is working");
});

module.exports = router;