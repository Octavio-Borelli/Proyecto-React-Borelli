import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProveedor'
import { Link } from 'react-router-dom';
import ArtAgregadosCart from '../ArtAgregadosCart/ArtAgregadosCart';
import Checkout from '../Checkout/Checkout';


const Cart = () => {

    const { agregarAlCarrito, vaciarCarrito, sumaTotalCarrito } = useContext(CartContext)

    return (
        <>
            {agregarAlCarrito.length > 0 ? (
                <div>
                    <Checkout agregarAlCarrito={agregarAlCarrito} sumaTotalCarrito={sumaTotalCarrito} />
                    <div className='agregadosCart'>
                        {agregarAlCarrito.map((objeto) => (
                            <ArtAgregadosCart key={objeto.id} objeto={objeto} />))}
                    </div>
                    <div>
                        <button className='btnItem' onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </div>)
                :
                <div>
                    <h3>carrito vacio</h3>
                    <Link to={"/"}>volver</Link>
                </div>
            }
        </>
    )
}

export default Cart
