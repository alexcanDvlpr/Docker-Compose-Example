'use strict'

var mongoose = require('mongoose');
var config = require('../config/config').config();
var port = config.server.port || 3000;

var app = require('../app');

var connectWithRetry = function() {
    return mongoose.connect(config.db.URL_DB, { useNewUrlParser: true }, (err, res) => {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log("Base de Datos Funcionando Correctamente");
            app.listen(port, () => {
                console.log(`Servidor arrancado en ${config.server.hostname}:${config.server.port}`);
            });
        }
    });
};

connectWithRetry();