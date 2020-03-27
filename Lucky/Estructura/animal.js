var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = Schema({
    image:String,
    name: String,
    city: String,
    species: String,
    birthday: Date,
    sex: String,
    size: String,
    weight: Number,
    vaccinated: Boolean,
    dewormed: Boolean,
    healthy: Boolean,
    sterilized: Boolean,
    identified: Boolean,
    microchip: Boolean,
    adoption_requirements: String,
    adoption_rate: Number,
    shipping: Boolean,
    status: String,
    history: String

}); 

module.exports = mongoose.model('Animal', animalSchema);