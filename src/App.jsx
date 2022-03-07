import Rutas from "./routes";
import "./App.css";
import CartProveedor from "./context/CartProveedor";

function App() {
  return (
    <main className="main">
      <CartProveedor>
        <Rutas />
      </CartProveedor>
    </main>
  );
}

export default App

