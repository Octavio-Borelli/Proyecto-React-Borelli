import React from 'react';

const InputCheckOut = ({
    handleChange,
    formulario,
    handleBlur,
    validar
}) => {

    return (
        <div className='contenedorInputs'>
            <div>
                <label className='etiquetaFormulario'>Nombre</label>
                <input className='inputFormulario' onChange={handleChange} onBlur={handleBlur} name="nombre" value={formulario.buyer.nombre} type="text" />
                {validar.nombre && (<small className='small'>{validar.nombre}</small>)}
            </div>
            <div>
                <label className='etiquetaFormulario'>Apellido</label>
                <input className='inputFormulario' onChange={handleChange} onBlur={handleBlur} name="apellido" value={formulario.buyer.apellido} type="mail" />
                {validar.apellido && (<small className='small'>{validar.apellido}</small>)}
            </div>
            <div>
                <label className='etiquetaFormulario'>Teléfono</label>
                <input className='inputFormulario' onChange={handleChange} onBlur={handleBlur} name="teléfono" value={formulario.buyer.teléfono} type="number" />
                {validar.teléfono && (<small className='small'>{validar.teléfono}</small>)}
            </div>
            <div>
                <label className='etiquetaFormulario'>Email</label>
                <input className='inputFormulario' onChange={handleChange} onBlur={handleBlur} name="email" value={formulario.buyer.email} type="email" />
                {validar.email && (<small className='small'>{validar.email}</small>)}
            </div>
        </div>
    )
}

export default InputCheckOut;

