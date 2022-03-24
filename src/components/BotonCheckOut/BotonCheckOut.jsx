import React, { useState } from 'react';
import ModalCheckOut from '../ModalCheckOut/ModalCheckOut'

const BotonCheckOut = ({ formulario, compraId }) => {

    const [visible, setVisible] = useState(false)

    const handleToggle = () => {
        setVisible(!visible);
    }

    return (
        <div >
            {visible ? <ModalCheckOut handleToggle={handleToggle} compraId={compraId} /> : null}
            <button className='botonCheckOut' onClick={() => { handleToggle(true) }} disabled={!formulario.buyer.nombre || !formulario.buyer.apellido || !formulario.buyer.teléfono || !formulario.buyer.email} type='submit' value="Comprar">Comprar</button>
        </div>
    )
}

export default BotonCheckOut


