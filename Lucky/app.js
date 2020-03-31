var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user_routes = require('./routes/user_animal');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/lucky-db', user_routes);

// CORS

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
const cors = require("cors");
app.use(
 cors({
 origin: "http://localhost:3000",
 optionsSuccessStatus: 200,
 credentials: true
 })
);


module.exports = app;