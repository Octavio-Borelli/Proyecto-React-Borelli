import React, { useEffect, useState } from 'react';
// import ItemCount from './ItemCount';
// import axios from "axios";
import ItemList from './ItemList';


function ItemListContainer({ }) {

    const muebles = [
        { nombre: "sillon", id: '1', precio: 10000, img: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg" },
        { nombre: "silla", id: '3', precio: 8000, img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31997_1.jpg" },
        { nombre: "cama", id: '2', precio: 20000, img: "https://www.espacity.com/w/wp-content/uploads/01347001000020_1-768x624.jpg" },
        { nombre: "mesa ratona", id: '5', precio: 7000, img: "https://mitearg.com/wp-content/uploads/2021/10/Mesa-Ratona-Baja-Cafe-Mite-Negro-Paraiso.jpg" },
        { nombre: "mesa de luz", id: '4', precio: 3000, img: "https://http2.mlstatic.com/D_NQ_NP_2X_890062-MLA47359897777_092021-F.webp" }
    ];


    const [itemMueble, setItemMueble] = useState([]);

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(muebles
                )

            }, 2000);
        });


        promesa.then((resultado) => {
            setItemMueble(resultado);
            console.log([resultado])
        }).catch((err) => { console.log(err) });

    }, []);

    return (
        <div>
            <ItemList muebles={itemMueble} />
        </div>
    );
};

export default ItemListContainer


// return (
//          <div
//             className={className}>
//             {textoDesafio}
//             <div>
//                 <ItemCount inicial={1} />
//             </div>
//         </ div>
//     )




