

const { Movie } = require("./models.js");

const createMovie = async (name, year, director) => {
    const newMovie = new Movie({name, year, director});
    await newMovie.save();
    console.log(newMovie);
  };

const findAll = async () => {
  const movieFindAll = await Movie.find({});
  console.log(movieFindAll);
}

const findMovie = async (name) => {
    const movieFind = await Movie.find({name});
    console.log(movieFind);
} 

const findByYear = async (year) => {
  const movieFindYear = await Movie.find({year});
  console.log(movieFindYear);
}

const updateMovieName = async (updateName, newName) => {
  const movieUpdateName = await Movie.updateOne({name: updateName}, {$set:{name: newName}});
  console.log(movieUpdateName);    
}

const updateMovieYear = async (name, newYear) => {
  const movieUpdateYear = await Movie.updateOne({name: name}, {$set:{year: newYear}});
  console.log(movieUpdateYear);
  console.log(await Movie.find({name: name}));
}

const deleteAll = async () => {
  await Movie.deleteMany({});
  console.log('All entries have been deleted');
}

const deleteMovieByName = async (name) => {
  await Movie.deleteOne({name: name});
  console.log(`${name} has been removed`);
} 

module.exports = {
  createMovie,
  findAll,
  findMovie,
  findByYear,
  updateMovieName,
  updateMovieYear,
  deleteAll,
  deleteMovieByName
}
