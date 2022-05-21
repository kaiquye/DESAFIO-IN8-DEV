const EstagioServices = require('./estagio-services');
const http = require('http');

class EstagioController {


    async NovoEstagiario(req, res) {
        try {
            if (!req.body.nome || !req.body.email || !req.body.telefone || !req.body.nascimento) {
                return res.status(400).json({
                    ok: false,
                    status_code: http.STATUS_CODES[400],
                    message: 'Invalid args'
                });
            }
            const response = await EstagioServices.NovoEstagiario(req.body);
            if (response instanceof Error) {
                return res.status(Number(response.name)).json({
                    ok: false,
                    status_code: http.STATUS_CODES[response.name],
                    message: response.message
                });
            }
            res.status(201).json({
                ok: true,
                status_code: http.STATUS_CODES[201],
                message: 'Novo estagiario cadastrado com sucesso.'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                status_code: http.STATUS_CODES[500],
                message: 'Error no servidor. Não foi possivel criar um novo estagiario.'
            });
        }
    }

    async BuscarEstagiarios(req, res) {
        try {
            const response = await EstagioServices.BuscarEstagiarios();
            return res.status(200).json({
                ok: true,
                status_code: http.STATUS_CODES[200],
                data: response
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                status_code: http.STATUS_CODES[500],
                message: 'Error no servidor. Não foi possivel buscar registros de estagiarios.'
            });
        }
    }

}

module.exports = new EstagioController();
