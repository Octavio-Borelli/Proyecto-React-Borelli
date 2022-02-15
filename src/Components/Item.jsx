import React from 'react'

const Item = ({ item }) => {

    return (

        <div className="contenedoresIndividualesItem">
            <img src={item.img} className="imagenes" />
            <div>
                <h4 className="nombreItem">{item.nombre}</h4>
                <h4 className="precioItem">{item.precio}</h4>
                <button className="btnItem">Detalles</button>
            </div>
        </div>


    )

};

export default Item