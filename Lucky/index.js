
var mongoose = require('mongoose');
var app = require('./app');
var port = 2020;
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/lucky', { useNewUrlParser: true })
    .then(() => {
        app.listen(port, () => { 
            console.log('servidor corriendo en http://localhost:' + port);
        });

    });