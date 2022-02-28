import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProveedor = ({ children }) => {

    const [agregarAlCarrito, setAgregarAlCarrito] = useState([]);

    const addItem = (objeto, cantidad) => {
        let cantItem = { ...objeto, cantidad }
        setAgregarAlCarrito([...agregarAlCarrito, cantItem])
    };

    const removeItem = (id) => {
        let resultado = agregarAlCarrito.filter((objeto) => objeto.id !== id)
        setAgregarAlCarrito(resultado)
    };

    const vaciarCarrito = () => {
        setAgregarAlCarrito([])
    };

    const isInCart = (id) => {
        return agregarAlCarrito.some((objeto) => objeto.id === id)
    };

    return (
        <CartContext.Provider value={{ agregarAlCarrito, addItem, removeItem, isInCart, vaciarCarrito }}>
            {children}
        </CartContext.Provider >
    )
};

export default CartProveedor;