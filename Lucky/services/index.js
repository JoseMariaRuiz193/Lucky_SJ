//service encargado de crear el token

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

function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const playload = jwt.decode(token, config.SECRET_TOKEN)
            if (playload.exp <= moment().unix()) {
               reject({
                   status: 401,
                   message: 'El Token ha expirado'
               });
            }
            resolve(playload.sub)

            } catch (err) {
                reject({
                    status: 500,
                    message: 'Invalid Token'
                });
            }
        });
        return decoded
}



module.exports = {createToken, decodeToken}
















