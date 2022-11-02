const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

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