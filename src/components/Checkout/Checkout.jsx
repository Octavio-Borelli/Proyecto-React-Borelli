import useFireStore from '../../hooks/useFireStore';
import React, { useState, useContext } from 'react';
import FormCheckOut from '../FormCheckOut/FormCheckOut';
import { CartContext } from '../../context/CartProveedor'

const Checkout = () => {

    const { agregarAlCarrito, sumaTotalCarrito } = useContext(CartContext)

    const [formulario, setFormulario] = useState({

        buyer: {
            nombre: "",
            apellido: "",
            teléfono: "",
            email: "",
        },
        items: agregarAlCarrito,
        total: sumaTotalCarrito(),
    });

    const { emitirTicket, compraId } = useFireStore()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emitirTicket({ datos: formulario });
    };

    const [validar, setValidar] = useState({});

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (value === "") {
            setValidar({ ...validar, [name]: "*campo requerido" });
            return;
        }
        setValidar({})
    };

    return (
        <>
            <FormCheckOut
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formulario={formulario}
                compraId={compraId}
                handleBlur={handleBlur}
                validar={validar}
            />
        </>
    )
}

export default Checkout;

