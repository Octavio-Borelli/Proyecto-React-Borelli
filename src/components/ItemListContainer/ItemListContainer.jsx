import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import useFireStore from '../../hooks/useFireStore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const { categoryId } = useParams();
    const { itemsMueble, getData } = useFireStore()

    useEffect(() => {
        getData(categoryId)
    }, [getData, categoryId])

    return (
        <div className="seccionItems">
            {<ItemList itemsMueble={categoryId === undefined ? itemsMueble : itemsMueble.filter((filtro) => filtro.categoryId === categoryId)} />}
        </div>
    );
};

export default ItemListContainer;    
