
require("dotenv").config();
const express = require("express");

const { connection } = require("./db");
const app = express();
const port = process.env.PORT;
const errorRouter = require("./routes/error");
const userRouter = require("./routes/user");

app.use(express.json());

app.use("/user", userRouter);
app.use("*", errorRouter);


app.listen(port || 5000, async () => {
    connection.authenticate();
    console.log("app is listening")
});
                                                                                                                                                      




