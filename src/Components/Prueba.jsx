import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import axios from "axios";

function ItemListContainer({ textoDesafio, className }) {
    return (<div className={className}>
        {textoDesafio}
        <div>
            <ItemCount inicial={1} />
        </div>
    </ div>
    )
};


// const ItemListContainer = ({ }) => {
//     const [info, setInfo] = useState(null);
//     const getData = async () => {
//         try {
//             const response = await axios.get("http://hp-api.herokuapp.com/api/characters"
//             );
//             console.log(response.data)
//         } catch (error) {
//             console.log(error);

//         }
//     };



//     useEffect(() => { getData() }, []);

//     return <h1>bammm</h1>

// };
export default ItemListContainer;
