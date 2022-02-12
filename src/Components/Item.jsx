import React from 'react'

const Item = ({ item }) => {
    return (
        <div>
            <h3>{item.nombre}</h3>
            <h3>{item.id}</h3>
            <div>{item.imgUrl}</div>
            <h2>{item.precio}</h2>
            <button>Ver mas detalles</button>
        </div>
    )
}

export default Item