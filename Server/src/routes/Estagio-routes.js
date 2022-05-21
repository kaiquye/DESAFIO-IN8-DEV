const { Router } = require('express');
const EstagioController = require('../modules/estagio/estagio-controller');

class EstagioRouter {

    App;

    constructor() {
        this.App = Router();
        this.Routes();
    }

    Routes() {
        this.App.post('/novoestagiario', EstagioController.NovoEstagiario);
        this.App.get('/todosestagiarios', EstagioController.BuscarEstagiarios);
    }

}
module.exports = new EstagioRouter().App;