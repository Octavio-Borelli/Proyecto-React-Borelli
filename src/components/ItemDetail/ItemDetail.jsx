import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ objeto }) => {

    return (

        <div className="contenedorObjetoDetalle">
            <div className="contenedorNombreObjeto">
                <h4 className="nombreObjeto">{objeto.nombre}</h4>
            </div>
            <div className="izquierda">
                <img src={objeto.img} className="imagenObjeto" alt="imagen" />
            </div>
            <div className="derecha">
                <h4 className="precioObjeto">Precio $ {objeto.precio}</h4>
            </div>
            <div className="contadorContenedor">
                <ItemCount objeto={objeto} inicial={1} stock={objeto.stock} />
            </div>
        </div>
    )
};

export default ItemDetail




