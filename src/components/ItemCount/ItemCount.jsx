import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProveedor';

const ItemCount = ({ inicial, stock, objeto }) => {

    const { addItem, isInCart } = useContext(CartContext);
    const [contador, setContador] = useState(inicial);

    function sumar() {
        if (contador < stock) {
            setContador(contador + 1);
        };
    };

    function restar() {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <>
            {!isInCart(objeto.id) && <div className="contador">
                <div>
                    <button className="restar" onClick={() => restar()}>-</button>
                    <h1>{contador}</h1>
                    <button className="restar" onClick={() => sumar()}>+</button>
                </div>
                <div>
                    <button className="comprar" onClick={() => addItem(objeto, contador)}>Agregar al carrito</button>
                </div>
            </div>}
            {isInCart(objeto.id) && <div className="contador">
                <Link className="finalizar" to={"/cart"} >Finalizar compra</Link>
            </div>
            }
        </>)
};

export default ItemCount;


