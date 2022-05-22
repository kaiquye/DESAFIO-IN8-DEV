import style from './header.module.css'
import logo from './icons/logo.svg'
import { useRef } from 'react'

function Header() {

    const menu_ref = useRef()

    function abriMenu() {
        let condicaoMenu = menu_ref.current.style.display;
        if (condicaoMenu == 'none') {
            menu_ref.current.style.display = 'flex'
        } else {
            menu_ref.current.style.display = 'none'
        }
    }

    return (
        <section className={style.header} >
            <div ref={menu_ref} style={{ display: 'none' }} className={style.body_header_nav_list_mobile}  >
                <ul>
                    <li> <a>Cadastro</a></li>
                    <li> <a>Lista</a>  </li>
                    <li> <a>Sobre Min</a></li>
                </ul>
            </div>
            <main className={style.body_header} >
                <div className={style.body_header_nav}  >

                    <button onClick={() => { abriMenu() }} className={style.body_header_button_mobile}  ></button>

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