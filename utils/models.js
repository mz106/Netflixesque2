
const mongoose = require("mongoose");
const { mongoConnect } = require("./mongodb.js");

const Movie = mongoose.model(
    "movies",
    {
        
        name: {
            type: String,
            required: true
        },

        year: {
            type: Number
        },

        director: {
            type: String
        }
    }
);

module.exports = {
    Movie
}