const ejs = require('ejs');
const port = process.env.PORT || 8080;
const express = require('express');
const app = express()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const routes = require('./app/routes/routes')
const dotenv = require('dotenv').load();

// use  your engine template and configure the folder

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs')

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); // expression static for bootstrap ( in node_modules)
app.use(express.static(__dirname + '/public'));  // find all ressource front



// call routes
routes(app)



app.listen(8080)



module.exports = app;