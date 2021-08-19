// docker run -rm --name my-mongo-db -dp 27017:27017 -v mongo-data:/data/db mongo
require("dotenv").config();
const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { createMovie, findAll, findMovie, findByYear,  updateMovieName, updateMovieYear, deleteAll, deleteMovieByName } = require('./utils');

// mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
//     {useNewUrlParser: true, useUnifiedTopology: true},
// );
                                                                                                                                                      
const app = async () => {     
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
    } else if (argv.delete) {
        await deleteMovieByName(argv.name)
    } else if (argv.deleteall) {
        await deleteAll();
    }
        
    process.exit();
} 

app();

