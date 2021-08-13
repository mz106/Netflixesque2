
require("dotenv").config();

// docker run -rm --name my-mongo-db -dp 27017:27017 -v mongo-data:data/db mongo"docker 
const mongoose = require("mongoose");

mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {useNewUrlParser: true, useUnifiedTopology: true},
);


const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const fs = require('fs')
// const command = process.argv[2];
// const input = process.argv[3];
// const updateInput = process.argv[4];
// const { createMovie, findMovie, updateMovie, deleteMovie } = require('./utils');
// const { add } = require("../../netflix/utils");




                                                                                                                                                                       
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


const app = async () => {     
    console.log(argv)
    // console.log(process.env)
    if (argv.add) {
        await createMovie(argv.name, argv.year, argv.director); 
    } else if (argv.delete) {
        await deleteMovie(argv.name);
    }
        
    process.exit();
} 

const createMovie = async (name, year, director) => {
    const newMovie = new Movie({name, year, director});
    await newMovie.save()
    console.log(newMovie)
  };

const deleteMovie = async (name) => {
    console.log('this is the delete function')
}  

// const findMovie = (name) => {
//     const 
// }  

app();
