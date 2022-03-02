import React from 'react'
import Item from '../Item/Item';


const ItemList = ({ muebles }) => {

    return (
        <>
            {muebles && muebles.map((item) => ((<Item key={item.id} item={item} />)))}
        </>)
};
export default ItemList