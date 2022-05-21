import RoutesApp from './routes/RoutesApp'
import Header from './components/header';
import style from './App.module.css'

function App() {
  return (
    <section className={style.App}  >
      <main className={style.App_body} >
        <header>
          <Header />
        </header>
        <main>
          <RoutesApp />
        </main>
        <footer>
        </footer>
      </main>
    </section>
  );
}

export default App;
