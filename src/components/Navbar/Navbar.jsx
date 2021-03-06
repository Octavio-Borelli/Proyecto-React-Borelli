import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../../context/CartProveedor';

function Navbar() {

    const { agregarAlCarrito } = useContext(CartContext)

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
                    <Link className="navLink" to={"/category/sillones"}>Sillones</Link>
                </li>
                <li className="itemNav">
                    <Link className="navLink" to={"/category/sillas"}>Sillas</Link>
                </li>
                <li className="itemNav">
                    <Link className="navLink" to={"/category/camas"}>Camas</Link>
                </li>
                <li className="itemNav">
                    <Link className="navLink" to={"/contacto"}>Contacto</Link>
                </li>
            </ul>
            <>
                {agregarAlCarrito.length !== 0 ?
                    < div className="carrito" to={"/cart"}>
                        <CartWidget />
                    </div> : null}
            </>
        </nav >
    );
}

export default Navbar;

