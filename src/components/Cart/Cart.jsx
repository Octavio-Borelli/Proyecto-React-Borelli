import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Checkout from '../Checkout/Checkout'



const Cart = ({ children, className }) => {
    return (

        <div className={className}>
            {children}
        </div>
    )
}

export default Cart