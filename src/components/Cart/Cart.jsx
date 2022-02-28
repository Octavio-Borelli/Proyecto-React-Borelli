import React, { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from '../../context/CartProveedor'
import { Link } from 'react-router-dom';
import ArtAgregadosCart from '../ArtAgregadosCart/ArtAgregadosCart';


const Cart = () => {

    const { agregarAlCarrito, vaciarCarrito } = useContext(CartContext)

    return (
        <>
            <div>
                <CartWidget />
            </div>

            {agregarAlCarrito.length === 0 ?
                <div>
                    <h3>carrito vacio</h3>
                    <Link to={"/"}>volver</Link>
                </div>
                :
                <div>

                    <div className='agregadosCart'>
                        <ArtAgregadosCart itemsSeleccionados={agregarAlCarrito} />
                    </div>

                    <div>
                        <button className='btnItem' onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart