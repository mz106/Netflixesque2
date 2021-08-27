

const { Movie } = require("../models/movie.js");
const { User } = require("../models/user.js");

const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const { Sequelize } = require("sequelize");

//mysql movie functions

const addMovie = async (name, year, director) => {
  const movie = Movie.build({
    name: name, 
    year: year,
    director: director
  });
  await movie.save();
};


//mysql user functions

const addUser = async (name) => {
  console.log('addUser reached start')
  const user = User.build({
    name: name
  });

  await user.save();
  console.log(`Added: ${user.name}.`)
  
}

const updateUser = async (name, newName) => {
  const User = await User.update(
    {name: newName},
    {where: {name: name}}
  );

  console.log(`Updated ${name} to ${newName}`)
}

const findUser = async (name) => {
  const user = await User.findAll(
    {where: {name: name}}
  );

  for (let u of user) {
    console.log(`User: ${u.name}`)
  }
}

const deleteUser = async (name) => {
  const user = await User.destroy(
    {where: {name}}
  );

  console.log(`User ${name} removed from database`);
}

module.exports = {
  addMovie,
  addUser,
  updateUser,
  findUser,
  deleteUser
}
