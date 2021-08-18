
const mongoose = require("mongoose");

mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {useNewUrlParser: true, useUnifiedTopology: true},
);


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