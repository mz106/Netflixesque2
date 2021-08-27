
//db functions from index.js main

// const mongoApp = async () => {     
//     if (argv.add) {
//         await createMovie(argv.name, argv.year, argv.director); 
//     } else if (argv.find) {
//         await findMovie(argv.name);
//     } else if (argv.findall) {
//         await findAll();
//     } else if (argv.findyear) {
//         await findByYear(argv.year);
//     } else if (argv.updatename) {
//         await updateMovieName(argv.updatename, argv.newname);
//     } else if (argv.updateyear) {
//         await updateMovieYear(argv.name, argv.newyear);
//     } else if (argv.updatedirector) {
//         await updateMovieDirector(argv.name, argv.director);
//     } else if (argv.delete) {
//         await deleteMovieByName(argv.name)
//     } else if (argv.deleteall) {
//         await deleteAll();
//     }
        
//     process.exit();
// } 

// const sqlApp = async () => {
//     console.log("sqlApp start reached");
//     try {
//         await connection.authenticate();
//         console.log("connection established")
//         if (argv.addcust) {
//             await addCustomer(argv.name, argv.movieid); 
//             console.log('add cust reached')
//         }
//         else if (argv.update) {
//             await updateCustomer(argv.name, argv.newname);
//             console.log(`Updated ${argv.name}`)
//         }
//         else if (argv.find) {
//             await findCustomer(argv.name);
//         }
//         else if (argv.deletecustomer) {
//             await deleteCustomer(argv.name);
//         }

//         process.exit();

//     } catch (error) {
//         console.log(`Connection has not been established: ${error}`);
//     }
// };

// // mongoApp();
// sqlApp();

// mongo db connection

// const mongoose = require("mongoose");

// const mongoConnect = mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME_MONGO}`,
//     {useNewUrlParser: true, useUnifiedTopology: true},
// );

// module.exports = mongoConnect;

// mongodb movie model

// const mongoose = require("mongoose");
// const { mongoConnect } = require("./mongodb.js");

// const Movie = mongoose.model(
//     "movies",
//     {
        
//         name: {
//             type: String,
//             required: true
//         },

//         year: {
//             type: Number
//         },

//         director: {
//             type: String
//         }
//     }
// );

// module.exports = {
//     Movie
// }