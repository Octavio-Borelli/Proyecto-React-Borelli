import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProveedor'
import { Link } from 'react-router-dom';
import ArtAgregadosCart from '../ArtAgregadosCart/ArtAgregadosCart';


const Cart = () => {

    const { agregarAlCarrito, vaciarCarrito, sumaTotalCarrito } = useContext(CartContext)


    return (
        <>
            {agregarAlCarrito.length === 0 ?
                <div>
                    <h3>carrito vacio</h3>
                    <Link to={"/"}>volver</Link>
                </div>
                :
                <div>
                    <div className='agregadosCart'>
                        <ArtAgregadosCart />
                    </div>

                    <div>
                        <button className='btnItem' onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                    <h2>Total: $ {sumaTotalCarrito(agregarAlCarrito)}</h2>

                </div>

            }

        </>

    )

}

export default Cart


