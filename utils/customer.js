
const { DataTypes } = require('sequelize');
const { connection } = require('./mysql');

const Customer = connection.define("Customer", {
    name: {type: DataTypes.STRING},
    movie_id: {type: DataTypes.STRING},
    
}, {});

const main = async () => {
    console.log("main app customer reached")
    try {
        await Customer.sync({alter: true});
    } catch(error) {
        console.log(error);
    }
};

main();

module.exports = {Customer};