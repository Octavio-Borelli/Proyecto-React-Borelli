import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import useFireStore from '../../hooks/useFireStore';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const { categoryId } = useParams();
    const { itemsMueble, getData } = useFireStore();

    console.log(categoryId)

    useEffect(() => {
        getData({ categoryId });
    }, []);

    return (
        <>
            <ItemList itemsMueble={itemsMueble} />
        </>
    );
};

export default ItemListContainer;








