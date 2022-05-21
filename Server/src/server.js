const express = require('express');
const EstagioRoutes = require('./routes/Estagio-routes');
const { ConfigCors } = require('./middleware/cors');
const { HelmetConfig } = require('./middleware/helmet');

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
        this.App.use(HelmetConfig());
    }

    Routes() {
        this.App.use('/api', [EstagioRoutes]);
    }

}

module.exports = new Server().App;
