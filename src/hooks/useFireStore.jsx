import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import db from '../firebase/firebase';
import { useState } from 'react';


const useFireStore = () => {

    const [itemsMueble, setItemsMueble] = useState([]);
    const [muebleIndividual, setMuebleIndividual] = useState({});

    const getData = async ({ categoryId }) => {

        try {
            const data = collection(db, "muebles");
            const col = await getDocs(data);
            const result = col.docs.map(
                (doc) => (doc = { id: doc.id, ...doc.data() })
            );
            if (categoryId) {
                const categoriaProductoNav = result.filter(
                    (producto) => producto.categoryId === categoryId
                );
                setItemsMueble(categoriaProductoNav);
            } else {
                setItemsMueble(result);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const getMuebleIndividual = async ({ id }) => {

        try {
            const document = doc(db, "muebles", id);
            const response = await getDoc(document);
            const resultado = { id: response.id, ...response.data() };
            setMuebleIndividual(resultado);

        } catch (error) {
            console.log(error)

        }
    };

    return {
        getData,
        itemsMueble,
        muebleIndividual,
        getMuebleIndividual
    }
}

export default useFireStore