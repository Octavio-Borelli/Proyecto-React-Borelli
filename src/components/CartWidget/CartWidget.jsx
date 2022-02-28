import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProveedor';
import LogoWidget from '../LogoWidget/LogoWidget';

function CartWidget() {

    const { agregarAlCarrito } = useContext(CartContext)

    return (<Link to={"/cart"}>
        <LogoWidget />{agregarAlCarrito.length}
    </Link>
    );




}

export default CartWidget;
