import React from 'react'
import Item from '../Item/Item';


const ItemList = ({ itemsMueble }) => {

    return (
        <>
            {itemsMueble.map((item) => (<Item key={item.id} item={item}></Item>))}
        </>)

};
export default ItemList