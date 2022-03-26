import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProveedor = ({ children }) => {

    const [agregarAlCarrito, setAgregarAlCarrito] = useState([]);

    const addItem = (objeto, cantidad) => {
        let cantItem = { ...objeto, cantidad }
        setAgregarAlCarrito([...agregarAlCarrito, cantItem])
    };

    const removeItem = (id) => {
        let remover = agregarAlCarrito.filter((objeto) => objeto.id !== id)
        setAgregarAlCarrito(remover)
    };

    const vaciarCarrito = () => {
        setAgregarAlCarrito([])
    };

    const isInCart = (id) => {
        return agregarAlCarrito.some((objeto) => objeto.id === id)
    };

    const sumaTotalCarrito = () => {
        let total = 0;
        agregarAlCarrito.map(({ precio, cantidad }) => total = total += precio * cantidad);
        return total;
    }

    const totalItems = () => {
        let totales = 0;
        agregarAlCarrito.map(({ cantidad }) => totales = totales += cantidad)
        return totales;
    }

    return (
        <CartContext.Provider value={{
            agregarAlCarrito,
            addItem,
            removeItem,
            isInCart,
            vaciarCarrito,
            sumaTotalCarrito,
            totalItems
        }}>
            {children}
        </CartContext.Provider >
    )
};

export default CartProveedor; 