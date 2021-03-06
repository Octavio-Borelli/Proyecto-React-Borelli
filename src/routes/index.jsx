import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Contacto from "../components/Contacto/Contacto";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/Navbar/Navbar";
import Nosotros from "../components/Nosotros/Nosotros";

const Rutas = () => {
    return (
        <BrowserRouter>
            <Navbar className="seccionNavBar" />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer className="seccionDetalleItem" />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cart/checkout" element={<Checkout />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;