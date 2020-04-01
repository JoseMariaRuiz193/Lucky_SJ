
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    image: { type: String },
    username: { type: String },
    name: { type: String },
    surname: { type: String },
    birthday: { type: Date },
    email: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('User', userSchema);
