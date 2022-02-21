import React from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';



function Navbar(filtrar) {
    return (

        <nav className="contenedorNav">
            <div>
                <Link className="nombreTienda" to={"/"}>Mimas</Link>
            </div>

            <ul className="categoriasNav">

                <li className="itemNav">
                    <Link className="navLink" to={"/nosotros"}>Nosotros</Link>
                </li>
                <li className="itemNav">
                    <Link className="navLink" to={"category/sillones"}>Sillones</Link>
                </li>
                <li className="itemNav">
                    <Link className="navLink" to={"category/sillas"}>Sillas</Link>
                </li>
                <li className="itemNav">
                    <Link className="navLink" to={"category/camas"}>Camas</Link>
                </li>
                <li className="itemNav">
                    <Link className="navLink" to={"/contacto"}>Contacto</Link>
                </li>
            </ul>

            <div className="carrito">
                <Cart />
            </div>

        </nav>

    )
        ;
}

export default Navbar;
