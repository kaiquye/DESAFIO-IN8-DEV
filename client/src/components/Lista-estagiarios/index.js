import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ContextApi } from '../../contextApi/contextApi'
import style from './lista.module.css'

function ListaEstagiarios() {

    const { ListarEstagiarios } = useContext(ContextApi)
    const [estagiarios, setEstagiarios] = useState()

    useEffect(() => {
        (async () => {
            const lista = await ListarEstagiarios()
            console.log(lista)
            setEstagiarios(lista)
        })()
    }, [])


    function formatDate(date) {

        const dtnasc = new Date(date)

        return (`  ${dtnasc.getDate() < 9 ? '0' + dtnasc.getDate() : dtnasc.getDate()}/${dtnasc.getMonth() < 9 ? '0' + dtnasc.getMonth() : dtnasc.getMonth()}/${dtnasc.getFullYear()} `)

    }

    return (
        <div className={style.lista} >
            <label className={style.lista_titulo} >LISTA DE CADASTRO</label>
            <div className={style.body_table} >
                <table className={style.lista_tabela} >
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{ width: '300px' }} >NOME</th>
                            <th style={{ width: '300px' }}>E-MAIL</th>
                            <th style={{ width: '250px' }}>NASCIMETNO</th>
                            <th style={{ width: '300px' }}>TELEFONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estagiarios && estagiarios.map((estagiario, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{estagiario.NOME_EST}</td>
                                <td>{estagiario.EMAIL_EST}</td>
                                <td>{formatDate(estagiario.DTNASC_EST)}</td>
                                <td>{estagiario.TEL_EST}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaEstagiarios