const mongoose = require("mongoose"); // connects express and nodejs with mongoDB
const express = require("express");
let cors = require("cors"); 
const bodyParser = require("body-parser");
const logger = require("morgan"); // debugger


const API_PORT = 5100; 
const app = express(); // instantiate express
app.use(cos());

// bodyParser: json parsing library
app.use(bodyParser.urlencoded(( extended: false)));
app.use(bodyParser.json);

const dbRoute = "mongodb+srv://shly01037@gmail.com:erICSSONE0011//@cluster0-jqcgs.mongodb.net/test?retryWrites=true&w=majority"; // from CONNECT

mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection; 

// Prompt when connected to the database
db.once("open", () => console.log("Connection with database made"));

// Check if connection was successful
db.on("error", console.error.bind(console, "MongoDB connection error: ")); 

const dataRouter = require("./routes/data"); 
app.use("/data", dataRouter);

// launch backend on API_PORT
app.listen(API_PORT, () => console.log('Listening on port ${API_PORT}')); 
