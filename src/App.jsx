import './App.css';
import Navbar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <main className="main">
      <div className="seccionNavBar">
        <Navbar />
      </div>
      {/* <div className="seccionCincoItems" >
        <ItemListContainer textoDesafio={"Desafio entregable 'crea tu landing'"} className={"parrafo"} />
      </div> */}
      <div className="seccionDetalleItem">
        <ItemDetailContainer />
      </div>
    </main>
  );
}

export default App
