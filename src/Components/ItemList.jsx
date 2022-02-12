import React from 'react'
import Item from './Item'


const ItemList = ({ muebles }) => {
    return (
        <div>
            {muebles.map((item) => (<Item key={item.id} item={item} />))}
        </div>

    )
}
export default ItemList