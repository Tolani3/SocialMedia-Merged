const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


/* Loading the environment variables from the .env file. */
dotenv.config();

/* Connecting to the MongoDB database. */
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser : true, useUnifiedTopology: true}, 
    ()=>{
    console.log("connected to MongoDB")
    }
);

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);//Address for restAPI
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800,()=>{
    console.log("Backend server is running! Hello Tolani")
});