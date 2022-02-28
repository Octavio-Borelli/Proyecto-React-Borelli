import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProveedor'

const ArtAgregadosCart = ({ itemsSeleccionados }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <>
            {itemsSeleccionados.map(objeto =>
                <div className={`${objeto.id}`} key={objeto.id}>

                    <img className="imagenObjeto" src={objeto.img} alt="" />
                    <h3>Id: {objeto.id}</h3>
                    <h3>Nombre: {objeto.nombre}</h3>
                    <h3>Precio: {objeto.precio}</h3>
                    <h3>Cantidad: {objeto.cantidad}</h3>
                    <div>
                        <button className='btnItem' onClick={() => removeItem(objeto.id)}>Eliminar</button>
                    </div>

                </div>
            )}
        </>

    )
}

export default ArtAgregadosCart