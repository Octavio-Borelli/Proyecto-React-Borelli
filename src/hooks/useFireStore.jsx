import { collection, getDocs, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
import db from '../firebase/firebase';
import { useState } from 'react';

const useFireStore = () => {

    const [itemsMueble, setItemsMueble] = useState([]);
    const [muebleIndividual, setMuebleIndividual] = useState({});

    const getData = async () => {

        try {
            const data = collection(db, "muebles");
            const col = await getDocs(data);
            const result = col.docs.map(
                (doc) => (doc = { id: doc.id, ...doc.data() })
            );
            setItemsMueble(result);

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

    const emitirTicket = async ({ datos }) => {
        try {
            const col = collection(db, "orders");
            const ticket = await addDoc(col, datos);
            alert(ticket.id);

        } catch (error) {
            console.log(error)
        }
    }


    return {
        getData,
        itemsMueble,
        muebleIndividual,
        getMuebleIndividual,
        emitirTicket,
    }
}

export default useFireStore