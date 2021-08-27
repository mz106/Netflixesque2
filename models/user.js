
const { DataTypes } = require('sequelize');
const { connection } = require("../db");

const User = connection.define("User", console.log("user model reached"), {
    name: {type: DataTypes.STRING}
}, {});

const main = async () => {
    console.log("main app customer reached")
    try {
        await User.sync({alter: true});
    } catch(error) {
        console.log(error);
    }
};

main();

module.exports = {
    User
};