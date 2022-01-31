import React from 'react';

function Navbar() {
    return <div className="fondoPagina">

        <nav className="contenedorNav">
            <div>
                <div class="nombreTienda">Mimas</div>
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

        </nav>
    </div>;
}

export default Navbar;
