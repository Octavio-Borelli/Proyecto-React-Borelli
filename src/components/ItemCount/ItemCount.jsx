import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({ inicial, stock, onAdd }) => {

    const [contador, setContador] = useState(inicial);


    function sumar() {
        if (contador < stock) {
            setContador(contador + 1);
        };
    }

    function restar() {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    function onAdd() {
        console.log(contador)
    };


    return (
        <div className='contador'>
            <h3>Cantidad</h3>
            <h1>{contador}</h1>
            <div>
                <button className="restar" onClick={() => restar()}>-</button>
                <button className="restar" onClick={() => sumar()}>+</button>
            </div>
            <Link className="agregar" to={"/cart/checkout"} onClick={() => onAdd()}>Agregar al carrito</Link>


        </div>)
};

export default ItemCount;
