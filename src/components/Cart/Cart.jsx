import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import Checkout from '../Checkout/Checkout'



const Cart = () => {
    return (
        <>
            <div>
                <Link to={"/cart/checkout"}>
                    <CartWidget />0
                </Link>
            </div>

        </>
    )
}

export default Cart