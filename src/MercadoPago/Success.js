import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const Success = ({correoUsuario}) => {

    
    const [params1] =useSearchParams();
    const [params2] =useSearchParams();
    const [params3] =useSearchParams();
    const numOp = params1.get('collection_id');
    const statusOp = params2.get('status');
    const paymentOp = params3.get('payment_id');

    if(correoUsuario) {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            email: correoUsuario,
            status: statusOp,
            date: serverTimestamp(),
            paymentId: paymentOp,
            iDCompra: numOp,
        })
        .then((res)=>{
            console.log(res);
        })
    }

    return(
        <div style={styles.container}>
            <CheckCircleIcon style={styles.icon}/>
            <h2>Tu numero de operacion es: {numOp}</h2>
            <p>pronto nos comunicaremos contigo via email</p>
            <Link to="/" style={styles.button}>Volver al inicio</Link>
        </div>
    )
}

export default Success;

const styles = {
    container: {
        width: '100vw',
        height: 'calc(100vh - 12rem)',
        backgroundColor: 'rgb(235,235,235)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    },
    box: {
        width: '20rem',
        height: '15rem',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'rgb(0, 204, 0)',
        fontSize: '5rem',
    },
    button: {
        textDecoration: 'none',
        backgroundColor: 'rgb(185, 123, 123)',
        color: 'black',
        padding: '.5rem',
        borderRadius: '.5rem'
    }
}