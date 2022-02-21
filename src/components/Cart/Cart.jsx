import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import Checkout from '../Checkout/Checkout'



const Cart = () => {
    return (
        <>
            <Link className="número" to={"/cart/checkout"}>
                <CartWidget />0
            </Link>
        </>
    )
}

export default Cart