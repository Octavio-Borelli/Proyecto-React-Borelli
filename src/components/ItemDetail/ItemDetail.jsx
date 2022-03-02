import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ objeto }) => {

    return (

        <div className="contenedorObjetoDetalle">
            <div className="contenedorNombreObjeto">
                <h4 className="nombreObjeto">{objeto.nombre}</h4>
            </div>
            <div className="izquierda">
                <img src={objeto.img} className="imagenObjeto" alt="" />
            </div>
            <div className="derecha">

                <h4 className="idObjeto">{objeto.id}</h4>
                <h4 className="precioObjeto">{objeto.precio}</h4>
                <h4 className="stockObjeto">{objeto.stock}</h4>
                <h4 className="descripcionObjeto">{objeto.descripcion}</h4>
            </div>
            <div className="contadorContenedor">
                <ItemCount objeto={objeto} inicial={1} stock={objeto.stock} />
            </div>
        </div>
    )
};

export default ItemDetail




