const connection = require('../../database/mysqlConnection');

class EstagioRepository {

    async create({ nome, email, nascimento, telefone }) {
        return connection('estagiario').insert({
            NOME_EST: nome, EMAIL_EST: email, DTNASC_EST: nascimento, TEL_EST: telefone
        });
    }

    async exist({ telefone, email }) {
        const estagiario = await connection('estagiario').select('ID_EST').where('TEL_EST', telefone).orWhere('email_est', email);
        if (estagiario[0] === undefined) {
            return null;
        }
        return estagiario;
    }

    async findAll() {
        return connection('estagiario').select('DTNASC_EST', 'EMAIL_EST', 'NOME_EST', 'TEL_EST');
    }

}

module.exports = new EstagioRepository();