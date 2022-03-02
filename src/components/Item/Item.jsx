import React from 'react'
import { Link } from 'react-router-dom';



const Item = ({ item }) => {

    return (

        <div className="contenedoresIndividualesItem">
            <img src={item.img} className="imagenes" alt="" />
            <div>
                <h4 className="nombreItem">{item.nombre}</h4>
                <h4 className="precioItem">{item.precio}</h4>
                <Link className="btnItem" to={`/item/${item.id}`}>Detalles del producto</Link>
            </div>
        </div >
    )
};

export default Item