// docker run -rm --name my-mongo-db -dp 27017:27017 -v mongo-data:/data/db mongo
require("dotenv").config();
const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { createMovie, findAll, findMovie, findByYear,  updateMovieName, updateMovieYear, updateMovieDirector, deleteAll, deleteMovieByName, addCustomer } = require('./utils');
const { connection } = require("./utils/mysql.js");

                                                                                                                                                      
const mongoApp = async () => {     
    if (argv.add) {
        await createMovie(argv.name, argv.year, argv.director); 
    } else if (argv.find) {
        await findMovie(argv.name);
    } else if (argv.findall) {
        await findAll();
    } else if (argv.findyear) {
        await findByYear(argv.year);
    } else if (argv.updatename) {
        await updateMovieName(argv.updatename, argv.newname);
    } else if (argv.updateyear) {
        await updateMovieYear(argv.name, argv.newyear);
    } else if (argv.updatedirector) {
        await updateMovieDirector(argv.name, argv.director);
    } else if (argv.delete) {
        await deleteMovieByName(argv.name)
    } else if (argv.deleteall) {
        await deleteAll();
    }
        
    process.exit();
} 

const sqlApp = async () => {
    console.log("sqlApp start reached");
    try {
        await connection.authenticate();
        console.log("connection established")
        if (argv.addcust) {
            await addCustomer(argv.name, argv.movieid); 
            console.log('add cust reached')
            // const { _, addcust, ...options } = {...argv};
            // console.log(`the options were ${options.value}`);
            // delete options['$0'];

            // await addCustomer(argv.id, argv.name, argv.movieid)
        }

        process.exit();

    } catch (error) {
        console.log(`Connection has not been established: ${error}`);
    }
};

// mongoApp();
sqlApp();

// const { _, add, ...options } = {...argv};
//             delete options['$0'];
//             console.log(options);


// docker run --rm --name master26-mysql -dp 3306:3306 -v mysql-data-master26:/var/lib/mysql 
// -v mysql-config-master26:/etc mysql/mysql-server:latest