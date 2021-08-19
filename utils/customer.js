
const { DataTypes } = require('sequelize');
const { connection } = require('./mysql');

const Customer = connection.define("Customer", {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
    name: {type: DataTypes.STRING},
    movie_id: {type: DataTypes.INTEGER},
    
}, {});

const main = async () => {
    try {
        await Customer.sync({alter: true});
    } catch(error) {
        console.log(error);
    }
};

module.exports = Customer;