import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProveedor'


const ArtAgregadosCart = ({ objeto }) => {

    const { removeItem } = useContext(CartContext)

    return (

        <div className='contenedorDetalleItem'>
            <img className="imagenObjeto" src={objeto.img} alt="imagen" />
            <h3>Nombre: {objeto.nombre}</h3>
            <h3>Precio: $ {objeto.precio}</h3>
            <h3>Cantidad: {objeto.cantidad}</h3>
            <h3>Subtotal: $ {objeto.cantidad * objeto.precio}</h3>
            <div>
                <button className='btnItem' onClick={() => removeItem(objeto.id)}>Eliminar</button>
            </div>
        </div>
    )
};

export default ArtAgregadosCart

