import api from '../api/Server'

// este arquivo é responsavel por direcionar e centralizar todas as rotas da aplicação
export default function EstagioServices() {

    return ({

        NovoCadastro: ({ nome, email, telefone, nascimento }) => {
            return api.post('/novoestagiario', {
                nome, email, telefone, nascimento
            });
        },
        BuscarTodos: () => {
            return api.get('/todosestagiarios')
        }
    })

}