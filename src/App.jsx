import './App.css';
import Navbar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer"

function App() {
  return (
    <main className="main">
      <div className="seccionNavBar">
        <Navbar />
      </div>
      <div className="seccionTexto">
        <ItemListContainer /*textoDesafio={"Desafio entregable 'crea tu landing'"}*/ className={"parrafo"} />
      </div>
    </main>
  );
}

export default App
