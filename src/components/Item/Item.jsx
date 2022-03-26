import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

    return (

        <div className="contenedoresIndividualesItem">
            <img src={item.img} className="imagenes" alt="imagen" />
            <div className="contenedoresIndividualesItem2">
                <h4 className="nombreItem">{item.nombre}</h4>
                <h4 className="precioItem">$ {item.precio}</h4>
                <h4 className="descripciónItem">{item.descripción}</h4>
                <h4 className="stockItem">Stock:{item.stock}</h4>
                <Link className="btnItem" to={`/item/${item.id}`}>Detalles del producto</Link>
            </div>
        </div>
    )
};

export default Item;

