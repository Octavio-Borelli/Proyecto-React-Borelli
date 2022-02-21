import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const muebles = [
        { nombre: "Sillon", id: '1', precio: "$40000", img: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg", descripcion: "Sillon de tres cuerpos, con una única placa de asiento de espuma de alta densidad, 5 almohadones de 50x50cm rellenos de vellón siliconado y patas de madera natural. Se puede tapizar en lino, pana o rafia." },

        { nombre: "Silla", id: '2', precio: "$12000", img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31997_1.jpg", descripcion: " Silla madera tapizada patas de madera natural. Se puede tapizar en lino, pana o rafia." },

        { nombre: "Cama", id: '3', precio: "$50000", img: "https://www.espacity.com/w/wp-content/uploads/01347001000020_1-768x624.jpg", descripcion: " Cama de una sola plaza, terminación madera natural." },

    ];


    const [objeto, setObjeto] = useState();

    const { id } = useParams();


    const getItem = () => {
        const mueble = muebles.find((mueble) => mueble.id === id)
        setObjeto(mueble)

    }

    useEffect(() => {

        const promesaDetail = new Promise((resolve, reject) => {
            setTimeout(() => {
                getItem()
                if (objeto) { resolve(objeto) }
            }, 2000)
        });

        promesaDetail.then(console.log)
            .catch(console.warn);

    }, []);

    return (

        <>
            {objeto && <ItemDetail objeto={objeto} />}
        </>
    );
};

export default ItemDetailContainer
