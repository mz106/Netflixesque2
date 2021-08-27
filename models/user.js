
const { DataTypes } = require('sequelize');

const User = connection.define("User", {
    name: {type: DataTypes.STRING},
    movie_id: {type: DataTypes.STRING},
    
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

module.exports = User;