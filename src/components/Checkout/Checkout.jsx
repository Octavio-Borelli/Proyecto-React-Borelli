import React from 'react';
import useFireStore from '../../hooks/useFireStore';
import { useState } from 'react';

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
    })

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


        <form onSubmit={handleSubmit} >
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
            <div >
                <button disabled={!form.buyer.nombre || !form.buyer.apellido || !form.buyer.teléfono || !form.buyer.email} type='submit' value="Comprar">Comprar</button>
            </div>
        </form >

    )
}

export default Checkout

