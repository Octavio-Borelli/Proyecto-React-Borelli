import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import useFireStore from '../../hooks/useFireStore';



const ItemDetailContainer = () => {

    const { id } = useParams();
    const { muebleIndividual, getMuebleIndividual } = useFireStore()

    useEffect(() => {
        getMuebleIndividual({ id })
    }, [])

    return (
        <>
            {<ItemDetail objeto={muebleIndividual} />}
        </>
    );
};

export default ItemDetailContainer
