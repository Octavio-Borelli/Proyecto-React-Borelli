import React from 'react'
import useFireStore from '../../hooks/useFireStore'

const ModalCheckOut = ({ handleToggle }) => {

    const { compraId } = useFireStore()

    return (
        <div className='contenedorModal'>
            <div className='contenidoModal'>
                <h3>Compra exitosa</h3>
                <h3>Id de la compra: {compraId}</h3>
                <button onClick={() => { handleToggle(false) }}>Cerrar</button>
            </div>
        </div >
    )
}

export default ModalCheckOut