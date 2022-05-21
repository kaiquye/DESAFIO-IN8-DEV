import { createContext } from 'react'
import EstagioServices from '../services/Estagiario-services'

export const ContextApi = createContext({})

export default function ContextApiProvider({ children }) {

    const estagiario = EstagioServices()

    async function NovoEstagiario({ nome, email, telefone, nascimento }) {
        try {
            await estagiario.NovoCadastro({ nome, email, telefone, nascimento })
        } catch (error) {
            alert(error)
        }
    }

    async function ListarEstagiarios() {
        try {
            const lista = await estagiario.BuscarTodos();
            console.log(lista.data.data)
            return lista.data.data
        } catch (error) {
            alert(error)
        }
    }

    return (
        <ContextApi.Provider value={{ NovoEstagiario, ListarEstagiarios }} >
            {children}
        </ContextApi.Provider>
    )
}