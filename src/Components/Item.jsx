import React from 'react'

const Item = ({ item }) => {

    return (
        <div>
            <div className="contenedoresItem">
                <img src={item.img} className="imagenes" />
                <div className="Item">
                    <h4>{item.nombre}</h4>
                    <h4>{item.precio}</h4>
                    <button className="btnItem">Detalles</button>
                </div>
            </div>
        </div>
    )

};

export default Item