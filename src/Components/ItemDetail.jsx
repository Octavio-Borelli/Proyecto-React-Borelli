import React from 'react'

const ItemDetail = ({ setObjeto }) => {
    return (

        <div>
            nombre: {setObjeto.nombre}
            <div>{setObjeto.url}</div>
            precio:{setObjeto.precio}
        </div>
    )
}

export default ItemDetail