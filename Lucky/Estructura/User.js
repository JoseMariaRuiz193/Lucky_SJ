
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*encriptacion contraseña, libreria*/
var bcrypt = require ('bcrypt');

var userSchema = Schema({
    image: { type: String },
    username: { type: String, unique: true, lowercase: true },
    name: { type: String },
    surname: { type: String },
    birthday: { type: String },
    email: { type: String },
    password: { type: String, select: false }/*para no enviar la contraseña al cliente*/
});
/*funcion para ejecutar antes o despues de almacenar el modelo*/
/*encriptacion password */
userSchema.pre('save', (next) =>{
    let user = this;
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err,salt) =>{
        if(err) return next(err)

        bcrypt.hash(user.password, salt, null, (err, hash) =>{
            if(err) return (err)
            user.password = hash
            next()
        })
    })
})


module.exports = mongoose.model('User', userSchema);
