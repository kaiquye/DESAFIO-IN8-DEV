import { Link } from 'react-router-dom'
import style from './notfound.module.css'

function NotFound() {

    return (
        <section className={style.NotFound}>
            <main className={style.NotFound_body}>
                <h1>404.</h1>
                <label>
                    Página não encontrada. Verifique a URL
                </label>
                <Link to={'/'} >Voltar</Link>
            </main>
        </section>
    )
}

export default NotFound
