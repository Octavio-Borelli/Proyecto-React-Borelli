import React from 'react';
import BotonCheckOut from '../BotonCheckOut/BotonCheckOut'
import InputCheckOut from '../InputCheckOut/InputCheckOut'

const FormCheckOut = ({
    handleSubmit,
    handleChange,
    formulario,
    compraId,
    handleBlur,
    validar
}) => {
    return (

        <form className='formulario' onSubmit={handleSubmit}>
            <InputCheckOut
                handleChange={handleChange}
                handleBlur={handleBlur}
                validar={validar}
                formulario={formulario}
            />
            <BotonCheckOut
                formulario={formulario}
                compraId={compraId}
            />
        </form >

    )
}

export default FormCheckOut

