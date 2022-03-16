import React from 'react'
import BotonCheckOut from '../BotonCheckOut/BotonCheckOut'
import InputCheckOut from '../InputCheckOut/InputCheckOut'

const FormCheckOut = ({ handleSubmit, handleChange, form }) => {
    return (

        <form onSubmit={handleSubmit} >
            <InputCheckOut handleChange={handleChange} form={form} />
            <BotonCheckOut form={form} />
        </form >
    )
}

export default FormCheckOut