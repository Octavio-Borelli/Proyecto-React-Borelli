import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const muebles = [
        { nombre: "Sillon", id: '1', precio: "$40000", img: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg" },
        { nombre: "Silla", id: '2', precio: "$12000", img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31997_1.jpg" },
        { nombre: "Cama", id: '3', precio: "$50000", img: "https://www.espacity.com/w/wp-content/uploads/01347001000020_1-768x624.jpg" },

    ];

    const [itemsMueble, setItemsMueble] = useState();


    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(muebles)

            }, 2000);
        });


        promesa.then((resultado) => {
            setItemsMueble(resultado);

        }).catch((err) => { console.log(err) });

    }, []);

    return (

        <>
            <ItemList muebles={itemsMueble} />
        </>
    );



};

export default ItemListContainer






