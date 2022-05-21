import Cadastro from '../../components/Formulario-cadastro/index'
import Lista from '../../components/Lista-estagiarios/index'
import style from './home.module.css'

function HomePage() {

    return (
        <section className={style.home} >
            <main className={style.home_body} >
                <div className={style.home_body_cadastro} >
                    <Cadastro />
                </div>
                <div className={style.home_body_lista} >
                    <Lista />
                </div>
            </main>
        </section>
    )

}

export default HomePage