var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = Schema({
    image: { type: String },
    name: { type: String },
    city: { type: String },
    datos: {
        type: {
            species: { type: String },
            birthday: { type: Date },
            sex: { type: String },
            size: { type: String },
            weight: { type: String },
            status: { type: String },
            history: { type: String }
        }
    },
    salud: {
        type: {
            vaccinated: { type: Boolean },
            dewormed: { type: Boolean },
            healthy: { type: Boolean },
            sterelized: { type: Boolean },
            identified: { type: Boolean },
            microchip: { type: Boolean },
        }
    },
    adopcion: {
        type: {
            adoption_requirements: { type: String },
            adoption_rate: { type: String },
            shipping: { type: Boolean }
        }
    }
});

module.exports = mongoose.model('Animal', animalSchema);