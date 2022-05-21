import style from './header.module.css'
import logo from './icons/logo.svg'

function Header() {

    return (
        <section className={style.header} >
            <main className={style.body_header} >
                <div className={style.body_header_nav}  >
                    <div className={style.body_header_nav_logo}  >
                        <img src={logo} style={{ width: '150px' }} />
                    </div>
                    <div className={style.body_header_nav_list}  >
                        <ul>
                            <li> <a>Cadastro</a></li>
                            <li> <a>Lista</a>  </li>
                            <li> <a>Sobre Min</a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.body_header_titulo} >
                    <p>ESTÁGIO</p>
                    <label>PROVA DE SELEÇÃO</label>
                </div>
            </main>
        </section>
    )

}

export default Header