
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
    } else if (argv.find) {
        await findMovie(argv.name);
    } else if (argv.findall) {
        await findAll();
    } else if (argv.findyear) {
        await findByYear(argv.year);
    }
        
    process.exit();
} 

const createMovie = async (name, year, director) => {
    const newMovie = new Movie({name, year, director});
    await newMovie.save()
    console.log(newMovie)
  };


const findMovie = async (name) => {
    const movieFind = await Movie.find({name});
    console.log(movieFind);
}    

const findAll = async () => {
    const movieFindAll = await Movie.find({});
    console.log(movieFindAll);
}

const findByYear = async (year) => {
    const movieFindYear = await Movie.find({year});
    console.log(movieFindYear);
}

const deleteMovie = async (name) => {
    console.log('this is the delete function')
}  



app();
