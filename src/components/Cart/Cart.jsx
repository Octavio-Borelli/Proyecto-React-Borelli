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
                <div className='contenedorCheckOut'>
                    <Checkout agregarAlCarrito={agregarAlCarrito} sumaTotalCarrito={sumaTotalCarrito} />
                    <div className='agregadosCart'>
                        {agregarAlCarrito.map((objeto) => (
                            <ArtAgregadosCart key={objeto.id} objeto={objeto} />))}
                        <div className='contenedorSumaTotal'>
                            <h3 className='sumaTotal'>Total: $ {sumaTotalCarrito()}</h3>
                        </div>
                    </div>
                    <div className='contenedorBotonesCarrito'>
                        <Link className='btnVaciarCart' to={"/"}>Volver a comprar</Link>
                        <button className='btnVaciarCart' onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </div>)
                :
                <div className='contenedorCarritoVacio'>
                    <h3 className="carritoVacio">Carrito vacio</h3>
                    <Link className='btnItem' to={"/"}>Volver al Home</Link>
                </div>
            }
        </>
    )
}

export default Cart;
