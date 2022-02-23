import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({ inicial, stock, onAdd }) => {

    const [contador, setContador] = useState(inicial);
    const [ocultar, setOcultar] = useState(true);
    const [mostrar, setMostrar] = useState(false);

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

    function ocultarBoton() {
        setOcultar(false)
    };


    function mostrarBoton() {
        setMostrar(true)
    };



    return (
        <>
            <div>
                {ocultar ? <div className="contador">
                    <button className="restar" onClick={() => restar()}>-</button>
                    <h1>{contador}</h1>
                    <button className="restar" onClick={() => sumar()}>+</button>
                    <button className="comprar" onClick={() => { ocultarBoton(false); mostrarBoton(true) }}>Comprar</button>
                </div> : null}
                <div className="contador">
                    {mostrar ? <Link className="finalizar" to={"/cart"} onClick={() => onAdd(contador)}>Finalizar compra</Link> : null}
                </div>
            </div>

        </>
    );
};

export default ItemCount;


