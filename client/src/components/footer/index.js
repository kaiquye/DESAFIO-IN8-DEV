import style from './footer.module.css'

function Footer() {
    return (
        <section className={style.footer} >
            <main className={style.footer_body} >
                <p>Kaique Mendes da Silva</p>
                <p>kaiquemendesilva82@gmail.com</p>
                <p>(31)9 99332 - 8321</p>
                <p>Faculdade Estacio de sá. Padro-BH</p>
            </main>
        </section>
    )
}

export default Footer