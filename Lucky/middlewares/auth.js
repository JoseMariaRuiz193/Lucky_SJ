
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');


function isAuth (req, res, next){
    if(!req.headers.authorization)
}
