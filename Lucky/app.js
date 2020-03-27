var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var user_routes =require('./routes/user_animal');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/lucky', user_routes);





module.exports = app;