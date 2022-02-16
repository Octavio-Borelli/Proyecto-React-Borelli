import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const objetoSillon =

    {
        nombre: "Sillon de tres cuerpos de 210 cm",
        id: '1',
        precio: "$40000",
        img: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg",
        descripcion: "Sillon de tres cuerpos, con una única placa de asiento de espuma de alta densidad, 5 almohadones de 50x50cm rellenos de vellón siliconado y patas de madera natural. Se puede tapizar en lino, pana o rafia.",

    };

    const [objeto, setObjeto] = useState([]);

    useEffect(() => {

        const promesaNueva = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(objetoSillon)

            }, 2000);
        });


        promesaNueva.then((resultado) => {
            setObjeto(resultado);

        }).catch((err) => { console.log(err) });;

    }, []);

    return (
        <>
            <ItemDetail objetoSillon={objeto} />
        </>);
};

export default ItemDetailContainer