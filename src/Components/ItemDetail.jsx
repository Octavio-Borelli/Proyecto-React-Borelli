import React from 'react'

const ItemDetail = ({ objetoSillon }) => {
    return (

        <div className="contenedorObjeto">
            <div className="contenedorNombreObjeto">
                <h4 className="nombreObjeto">{objetoSillon.nombre}</h4>
            </div>
            <div className="izquierda">
                <img src={objetoSillon.img} className="imagenObjeto" />
            </div>
            <div className="derecha">
                <h4 className="precioObjeto">{objetoSillon.precio}</h4>
                <h4 className="descripcionObjeto">{objetoSillon.descripcion}</h4>
                <button className="botonObjeto">Comprar</button>
            </div>
        </div>
    )
};

export default ItemDetail