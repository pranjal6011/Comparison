require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;   //Port number at which server is running.
const expressLayouts = require('express-ejs-layouts'); // For using layouts
const cors = require('cors')
// const flash = require('connect-flash');
// const flashMware = require('./config/middleware');
const path = require('path');
app.use(cors());

// enable the parsing of URL-encoded data sent from a web form or as query parameters in the URL
app.use(express.urlencoded({ extended: true }));


// Using aseets static file
app.use(express.static(process.env.ASSET_PATH));
// extract styles and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Here we are using Layouts
app.use(expressLayouts);

// Setting up our view Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// app.use(flash());
// app.use(flashMware.setFlash);

// Here basically we are using routes index file after coming in this file
app.use('/', require('./routes/index'));


// This is to run the server
app.listen(process.env.Port || port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on the port: ${port}`);
});