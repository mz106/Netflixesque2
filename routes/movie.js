
const express = require("express");

const router = express.Router();

const { addMovie } = require("../utils/index");



// add movie

const addMovieRouter = async (req, res, next) => {
    try {
        res.status(201).json({name: req.body.name, year: req.body.year, director: req.body.director});
        addMovie(req.body.name, req.body.year, req.body.director);
    } catch (error) {
        return next(error);
    }
};
// router.post("/add", (req, res) => {
//     res.status(201).json({name: req.body.name, year: req.body.year, director: req.body.director});
// });

router.post("/add", addMovieRouter);

// get movie buy name
router.get("/:name", (req, res) => {
    res.status(200).send("movie get route is working");
});


module.exports = router;