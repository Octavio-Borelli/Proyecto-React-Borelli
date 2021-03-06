import { collection, getDocs, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
import db from '../firebase/firebase';
import { useState } from 'react';
import { useCallback } from 'react';

const useFireStore = () => {

    const [itemsMueble, setItemsMueble] = useState([]);
    const [muebleIndividual, setMuebleIndividual] = useState({});
    const [stockActualizado, setStockActualizado] = useState([]);
    const [compraId, setCompraId] = useState(null);

    const getData = useCallback(async () => {
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
    }, []);

    const getMuebleIndividual = useCallback(async ({ id }) => {
        try {
            const document = doc(db, "muebles", id);
            const response = await getDoc(document);
            const resultado = { id: response.id, ...response.data() };
            setMuebleIndividual(resultado);
        } catch (error) {
            console.log(error)
        }
    }, []);

    const emitirTicket = async ({ datos }) => {
        try {
            const col = collection(db, "ordenes");
            const ticket = await addDoc(col, datos);
            setCompraId(ticket.id);

            datos.items.map((e) => actualizarStock(e.id, e.stock, e.cantidad))
        } catch (error) {
            console.log(error)
        }
    };

    const actualizarStock = async (id, stock, cantidad) => {
        const compraConfirmada = (doc(db, "muebles", id))
        try {
            await updateDoc(compraConfirmada, { stock: stock - cantidad })
            setStockActualizado(compraConfirmada)
        } catch (error) {
            console.log(error)
        }
    };

    return {
        getData,
        itemsMueble,
        muebleIndividual,
        getMuebleIndividual,
        emitirTicket,
        actualizarStock,
        stockActualizado,
        compraId,
    }
}

export default useFireStore;

