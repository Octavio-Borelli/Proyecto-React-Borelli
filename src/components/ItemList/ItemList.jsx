import React from 'react'
import Item from '../Item/Item';


const ItemList = ({ itemsMueble }) => {

    return (
        < >
            {itemsMueble.map((item) => (<Item key={item.id} item={item} />))}
        </>)

};
export default ItemList