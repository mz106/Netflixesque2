
const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const Movie = connection.define("Movie", {
    name: {type: DataTypes.STRING},
    year: {type: DataTypes.INTEGER},
    director: {type: DataTypes.STRING}
}, {
    indexes: [{unique: true, fields: ['name']}]
});

module.exports = {
    Movie
};

