import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer({ textoDesafio, className }) {
    return (<div className={className}>
        {textoDesafio}
        <div>
            <ItemCount inicial={1} />
        </div>
    </ div>
    )
};

export default ItemListContainer;
