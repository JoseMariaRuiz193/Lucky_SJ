

var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');

function createToken(user) {
    const playload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }

    /*codificarlo con el metodo encode y con el secret */
    /* secret en otro js a parte, en el config*/
    return jwt.encode(playload, config.SECRET_TOKEN)
}








module.exports = createToken
















