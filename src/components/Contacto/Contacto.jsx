import React from 'react'


const Contacto = () => {
    return (
        <div>
            <div className="seccion-5">



                <div className="fondoFormulario">
                    <form className="formulario-contacto" action="" method="post" enctype="application/x-www-form-urlencoded">
                        Nombre<input type="text" />

                        Apellido<input type="text" />

                        Email<input type="email" />

                        <div className="botonesFormularioUbicacion">
                            <button className="botFormulario" value="Enviar">
                                Enviar
                            </button>
                            <button className="botFormulario" type="reset" value="Borrar">
                                Borrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default Contacto