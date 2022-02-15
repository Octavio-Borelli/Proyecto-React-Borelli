import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const objetoSillon =
    {
        nombre: "sillon",
        id: 1,
        precio: 10000,
        url: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg"
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
            console.log(resultado);
        }).catch((err) => { console.log(err) });;

    }, []);

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail setObjeto={setObjeto} />
        </div>);
};

export default ItemDetailContainer