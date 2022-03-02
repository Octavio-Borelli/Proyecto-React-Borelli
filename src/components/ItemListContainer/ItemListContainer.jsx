import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const muebles = [
        { nombre: "Sillon", id: '1', precio: "$40000", stock: "25", img: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg", descripcion: "Sillon de tres cuerpos, con una única placa de asiento de espuma de alta densidad, 5 almohadones de 50x50cm rellenos de vellón siliconado y patas de madera natural. Se puede tapizar en lino, pana o rafia." },
        { nombre: "Sillon", id: '2', precio: "$45000", stock: "22", img: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg", descripcion: "Sillon de tres cuerpos, con una única placa de asiento de espuma de alta densidad, 5 almohadones de 50x50cm rellenos de vellón siliconado y patas de madera natural. Se puede tapizar en lino, pana o rafia." },

        { nombre: "Silla", id: '3', precio: "$15000", stock: "17", img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31997_1.jpg", descripcion: " Silla madera tapizada patas de madera natural. Se puede tapizar en lino, pana o rafia." },
        { nombre: "Silla", id: '4', precio: "$12000", stock: "15", img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31997_1.jpg", descripcion: " Silla madera tapizada patas de madera natural. Se puede tapizar en lino, pana o rafia." },

        { nombre: "Cama", id: '5', precio: "$53000", stock: "2", img: "https://www.espacity.com/w/wp-content/uploads/01347001000020_1-768x624.jpg", descripcion: " Cama de una sola plaza, terminación madera natural." },
        { nombre: "Cama", id: '6', precio: "$54500", stock: "8", img: "https://www.espacity.com/w/wp-content/uploads/01347001000020_1-768x624.jpg", descripcion: " Cama de una sola plaza, terminación madera natural." },

    ];

    const [itemsMueble, setItemsMueble] = useState();

    const { id } = useParams();


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







