var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user_routes =require('./routes/user_animal');
var port = 3000;
app.listen(port, () => { 
    console.log('servidor corriendo en http://localhost:' + port)});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/lucky-db', user_routes);






module.exports = app;