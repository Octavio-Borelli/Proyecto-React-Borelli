import React, { useState } from 'react';

const ItemCount = ({ inicial }) => {

    const [contador, setContador, stock = 10] = useState(inicial);


    function sumar() {
        if (contador < stock) {
            setContador(contador => contador + 1);
        };
    }

    function restar() {
        if (contador > 0) {
            setContador(contador => contador - 1);
        }
    };

    return (
        <div className='contador'>
            <h3>Items cantidad</h3>
            <h1>{contador}</h1>
            <div>
                <button className="restar" onClick={() => restar()}>-</button>
                <button className="restar" onClick={() => sumar()}>+</button>
            </div>
            <button className="agregar">Agregar al carrito</button>

        </div>)
};

export default ItemCount;
