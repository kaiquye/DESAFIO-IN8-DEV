const express = require('express');
const EstagioRoutes = require('./routes/Estagio-routes');
const ConfigCors = require('./middleware/cors');
const ConfigHelmet = require('./middleware/helmet');

class Server {

    App;

    constructor() {
        this.App = express();
        this.Middleware();
        this.Routes();
    }

    Middleware() {
        this.App.use(express.json());
        this.App.use(ConfigCors());
        this.App.use(ConfigHelmet());
    }

    Routes() {
        this.App.use('/api', [EstagioRoutes]);
    }

}

module.exports = new Server().App;
