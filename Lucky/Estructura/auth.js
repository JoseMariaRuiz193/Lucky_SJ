

var mongoose = require ('mongoose');
var User = require ('../Estructura/User');
var service = require ('../services');

function signUp(req, res) {
    const user = new User({
        username: req.body.username,
        name: req.body.name,
        surname: req.body.surname,
        birthday: req.body.birthday,
        email: req.body.email,
    });
    user.save((err) => {
        if (err)
            res.status(404).send({
                message: `Error al crear usuario: ${err}`
            })
        return res.status(200).send({
            token: service.createToken(user)
        });       /*service es una funcion que ayuda a realizar acciones que repitas en el codigo */
    });
}




function signIn() {

}






module.exports = { signUp, signIn }