import React from 'react';
import CartWidget from './CartWidget';


function Navbar() {
    return (

        <nav className="contenedorNav">
            <div>
                <div className="nombreTienda">Mimas</div>
            </div>

            <ul className="categoriasNav">
                <li className="itemNav">
                    <a className="navLink">Home</a>
                </li>
                <li className="itemNav">
                    <a className="navLink">Nosotros</a>
                </li>
                <li className="itemNav">
                    <a className="navLink">Productos</a>
                </li>
                <li className="itemNav">
                    <a className="navLink">Complementos</a>
                </li>
                <li className="itemNav">
                    <a className="navLink">Contacto</a>
                </li>
            </ul>

            <div className="carrito">
                <CartWidget />
                0</div>

        </nav>

    )
        ;
}

export default Navbar;
