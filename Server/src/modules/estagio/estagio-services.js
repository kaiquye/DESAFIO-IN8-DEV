const { FormataData } = require('../../util/FormatDate');
const EstagioRepository = require('./estagio-repository');

class EstagioServices {

    async NovoEstagiario({ nome, email, nascimento, telefone }) {
        try {
            const exist = await EstagioRepository.exist({ telefone, email });
            if (exist !== null) {
                let error = new Error('Já exite um usuario cadastrado com esse telefone/email');
                error.name = '409';
                return error;
            }
            // verificando e convertendo a data recebida.
            const dataFormatada = FormataData(nascimento);
            if (dataFormatada instanceof Error) {
                let error_formato_data = new Error(dataFormatada + 'formato aceito : yyyy-hh-uu');
                error_formato_data.name = '400';
                return error_formato_data;
            }

            await EstagioRepository.create({ nome, email, nascimento: dataFormatada, telefone });
            return true;
        } catch (error) {
            console.log(error);
            let error_ = new Error('Erro ao criar um novo estagiario.');
            error_.name = '500';
            return error_;
        }
    }

    async BuscarEstagiarios() {
        try {
            const registrosEstagiarios = await EstagioRepository.findAll();
            if (registrosEstagiarios[0] == undefined) {
                return 'Não existe registros no banco ';
            }
            return registrosEstagiarios;
        } catch (error) {
            console.log(error);
            let error_ = new Error('Erro ao buscar registros de estagiarios.');
            error_.name = '500';
            return error_;
        }
    }

}

module.exports = new EstagioServices();