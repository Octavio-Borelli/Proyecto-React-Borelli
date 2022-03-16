import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import useFireStore from '../../hooks/useFireStore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const { categoryId } = useParams();
    const { itemsMueble, getData } = useFireStore()

    useEffect(() => {
        getData({ categoryId })
    }, [])

    return (
        <>

            {/* {<ItemList itemsMueble={itemsMueble} />} */}
            {<ItemList itemsMueble={categoryId === undefined ? itemsMueble : itemsMueble.filter((f) => f.categoryId === categoryId)} />}
        </>
    );
};

export default ItemListContainer;
