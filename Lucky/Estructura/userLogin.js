var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userloginSchema = Schema({
    email: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('UserLogin', userloginSchema);