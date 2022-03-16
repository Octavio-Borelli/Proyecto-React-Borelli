import React, { useState } from 'react'
import ModalCheckOut from '../ModalCheckOut/ModalCheckOut'

const BotonCheckOut = ({ form }) => {

    const [visible, setVisible] = useState(false)

    const handleToggle = () => {
        setVisible(!visible)
    }

    return (
        <div >
            {visible ? <ModalCheckOut handleToggle={handleToggle} /> : null}
            <button onClick={() => { handleToggle(true) }} disabled={!form.buyer.nombre || !form.buyer.apellido || !form.buyer.teléfono || !form.buyer.email} type='submit' value="Comprar">Comprar</button>
        </div>
    )
}

export default BotonCheckOut


