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



function App() {
    return (
        <main className="main">
            <div className="seccionNavBar">
                <Navbar />
            </div>
            {/* </div> */}
            <Rutas />
            {/* <div className="seccionCincoItems" >
          <ItemListContainer textoDesafio={"Desafio entregable 'crea tu landing'"} className={"parrafo"} />
        </div> */}
            {/* <div className="seccionDetalleItem">
          <ItemDetailContainer />
        </div> */}

        </main>
    );
}


    // const objetoSillon = [

    //     {
    //         nombre: "Sillon de tres cuerpos de 210 cm",
    //         id: '1',
    //         precio: "$40000",
    //         img: "https://www.oromanta.com/img_productos/10261401_SILLON-BRISTOL.jpg",
    //         descripcion: "Sillon de tres cuerpos, con una única placa de asiento de espuma de alta densidad, 5 almohadones de 50x50cm rellenos de vellón siliconado y patas de madera natural. Se puede tapizar en lino, pana o rafia.",

    //     },

    //     {
    //         nombre: "Silla madera tapizada",
    //         id: '2',
    //         precio: "$12000",
    //         img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31997_1.jpg",
    //         descripcion: " Silla madera tapizada patas de madera natural. Se puede tapizar en lino, pana o rafia.",

    //     },
    //     {
    //         nombre: "Cama 1 plaza",
    //         id: '3',
    //         precio: "$50000",
    //         img: "https://www.espacity.com/w/wp-content/uploads/01347001000020_1-768x624.jpg",
    //         descripcion: " Cama de una sola plaza, terminación madera natural.",

    //     }

    // ];


    


// return (

//     <>
//         <ItemDetail muebles={objeto} />

//     </>

// );
// };





// useEffect(() => {

//     const promesaNueva = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(objetoSillon)

//         }, 2000);
//     });


//     promesaNueva.then((resultado) => {
//         setObjeto(resultado);

//     }).catch((err) => { console.log(err) });;

// }, []);

// return (

//     <>
//         <ItemDetail objetoSillon={objeto} />
//         {params.id}
//     </>

// );
// };

// export default ItemDetailContainer




                    // const promesaNueva = new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             resolve(

                    //                 function getItem(muebles) {

                    //                     const mueble = muebles.find(mueble => mueble.id === id_a_buscar)
                    //                     return (mueble)
                    //                 }
