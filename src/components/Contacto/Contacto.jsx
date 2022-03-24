import React from 'react'

const Contacto = () => {
    return (

        <div className="fondoFormulario">
            <form className="formularioContacto">
                Nombre<input type="text" />
                Apellido<input type="text" />
                Email<input type="email" />
                <div className="botonesFormularioUbicacion">
                    <button disabled className="botFormulario" value="Enviar">
                        Enviar
                    </button>
                    <button disabled className="botFormulario" value="Borrar">
                        Borrar
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Contacto