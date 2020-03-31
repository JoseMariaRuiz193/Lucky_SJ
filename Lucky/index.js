
var mongoose = require('mongoose');
var app = require('./app');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://JS:1234@lucky-db-1ozr2.mongodb.net/test?retryWrites=true&w=majority', { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })
    .then(() => {
       console.log('conectado');
    });


