

const { Movie } = require("./models.js");
const { Customer } = require("../models/customer.js");
require('./mongodb.js');

//mongodb functions

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

const updateMovieDirector = async (name, newDirector) => {
  const movieUpdateDirector = await Movie.updateOne({name: name}, {$set:{director: newDirector}});
  console.log(movieUpdateDirector);
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

//mysql functions

const addCustomer = async (name, movieId) => {
  console.log('addCustomer reached start')
  const customer = Customer.build({
    name: name,
    movie_id: movieId
  });

  await customer.save();
  console.log(`Added: ${customer.name}.`)
  
}

const updateCustomer = async (name, newName) => {
  const customer = await Customer.update(
    {name: newName},
    {where: {name: name}}
  );

  console.log(`Updated ${name} to ${newName}`)
}

const findCustomer = async (name) => {
  const customer = await Customer.findAll(
    {where: {name: name}}
  );

  for (let cust of customer) {
    console.log(`Customer: ${cust.name}`)
  }
}

const deleteCustomer = async (name) => {
  const customer = await Customer.destroy(
    {where: {name}}
  );

  console.log(`Customer ${name} removed from database`);
}

module.exports = {
  createMovie,
  findAll,
  findMovie,
  findByYear,
  updateMovieName,
  updateMovieYear,
  updateMovieDirector,
  deleteAll,
  deleteMovieByName,
  addCustomer,
  updateCustomer,
  findCustomer,
  deleteCustomer
}
