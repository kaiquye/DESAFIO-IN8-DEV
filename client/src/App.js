import RoutesApp from './routes/RoutesApp'
import Header from './components/header';
import style from './App.module.css'
import Footer from './components/footer';

function App() {
  return (
    <section className={style.App}  >
      <div className={style.home_voltar}>
        <button className={style.home_buttonVoltar}
          onClick={() => {
            window.scrollTo(0, 0);
          }} >
        </button>
      </div>
      <main className={style.App_body} >
        <header>
          <Header />
        </header>
        <main>
          <RoutesApp />
        </main>
        <footer>
          <Footer />
        </footer>
      </main>
    </section>
  );
}

export default App;
