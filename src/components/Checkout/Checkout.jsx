import React from 'react';
import useFireStore from '../../hooks/useFireStore';
import { useState } from 'react';
import FormCheckOut from '../FormCheckOut/FormCheckOut';

const Checkout = ({ agregarAlCarrito, sumaTotalCarrito }) => {

    const [form, setForm] = useState({

        buyer: {
            nombre: "",
            apellido: "",
            teléfono: "",
            email: "",
        },
        items: agregarAlCarrito,
        total: sumaTotalCarrito,
    });

    const { emitirTicket } = useFireStore()

    const handleChange = (e) => {
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emitirTicket({ datos: form })
    };

    return (
        <>
            <FormCheckOut handleSubmit={handleSubmit} handleChange={handleChange} form={form} />
        </>
    )
}

export default Checkout

