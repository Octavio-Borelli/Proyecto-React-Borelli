import React from 'react'

const InputCheckOut = ({ handleChange, form }) => {
    return (
        <div>
            <div>
                <label>Nombre</label>
                <input onChange={handleChange} name="nombre" value={form.buyer.nombre} type="text" />
            </div>
            <div>
                <label>Apellido</label>
                <input onChange={handleChange} name="apellido" value={form.buyer.apellido} type="mail" />
            </div>
            <div>
                <label>Teléfono</label>
                <input onChange={handleChange} name="teléfono" value={form.buyer.teléfono} type="number" />
            </div>
            <div>
                <label>Email</label>
                <input onChange={handleChange} name="email" value={form.buyer.email} type="email" />
            </div>
        </div>
    )
}

export default InputCheckOut