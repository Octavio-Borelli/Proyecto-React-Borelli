import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import useFireStore from '../../hooks/useFireStore';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const { categoryId } = useParams();
    const { itemsMueble, getData } = useFireStore()

    useEffect(() => {
        getData()
    }, [])

    return (
        <>

            {/* {<ItemList itemsMueble={itemsMueble} />} */}
            {<ItemList itemsMueble={categoryId === undefined ? itemsMueble : itemsMueble.filter((f) => f.categoryId === categoryId)} />}
        </>
    );
};

export default ItemListContainer;
