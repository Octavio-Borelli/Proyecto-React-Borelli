import React, { useContext } from 'react';
import { CartContext } from '../../context/CartProveedor';
import LogoTilde from '../LogoTilde/LogoTilde';

const ModalCheckOut = ({ handleToggle, compraId }) => {

    const { vaciarCarrito } = useContext(CartContext);

    return (
        <div className='contenedorModal'>
            <div className='contenidoModal'>
                <LogoTilde />
                <h1>Compra exitosa</h1>
                <h2 className='h2ContenidoModal' >Id de la compra: {compraId}</h2>
                <div className="contenedorBotonModal">
                    <button className='btnItem' onClick={() => { handleToggle(false); vaciarCarrito(); }} type="button">Cerrar</button>
                </div>
            </div>
        </div >
    )
}

export default ModalCheckOut; 