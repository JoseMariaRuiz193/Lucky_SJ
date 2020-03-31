
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    image:String,
    username: String,
    name: String,
    surname: String,
    birthday: Date,
    email: String,
    password: String
}); 

module.exports = mongoose.model('User', userSchema);


