import { Input, TextField } from '@material-ui/core';
import style from './cadatro.module.css'

function NovoEstagiario() {


    return (
        <section className={style.cadastro} >
            <main className={style.cadastro_body} >
                <h1>CADASTRO</h1>
                <form className={style.cadastro_body_form} >
                    <div>
                        <label>
                            nome
                        </label>
                        <input />
                    </div>
                    <div>
                        <label>
                            E-mail
                        </label>
                        <input />
                    </div>
                    <div>
                        <label>
                            Nascimento
                        </label>
                        <input />
                    </div>
                    <div>
                        <label>
                            Telefone
                        </label>
                        <input />
                    </div>
                </form>
            </main>
        </section>
    )

}

export default NovoEstagiario
