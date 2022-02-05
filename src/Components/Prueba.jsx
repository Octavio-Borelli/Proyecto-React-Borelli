import React, { useState } from "react";

const Prueba = ({ nombre }) => {
    const [contador, setContador] = useState(1);


    return <>
        <h1>{contador}</h1>
        <button onClick={() => setContador(contador + 1)}>sumar</button>;
        <button onClick={() => setContador(contador - 1)}>restar</button>;
    </>
};
export default Prueba;