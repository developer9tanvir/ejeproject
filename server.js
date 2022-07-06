
const dotenv = require('dotenv').config();
const path = require('path');
const colors = require('colors');
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoDBConnect = require('./config/db');


//body data
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//enviralment variables
const PORT = process.env.SERVER_PORT || 5050;

// mongo server cannect
mongoDBConnect();

// ejs setap
app.set("view engine", "ejs");
app.set("layout", 'layouts/app');
app.use(expressLayouts);



//static folders
app.use('/assets', express.static(path.join(__dirname, '/assets')));




//Routes
app.use('/student', require('./routes/studentRoutes'))



// server listen
app.listen(PORT, () => console.log(`server is runing on port http://localhost:/${PORT}`.bgGreen.black));