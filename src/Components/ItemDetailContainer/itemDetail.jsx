import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({product}) => {
    const { agregarProducto } = useContext(cartContext);

    const [finalizar, setFinalizar] = useState(true);

    const finalizarCompra = (count) => {
        agregarProducto({...product, cantidad:count});
        setFinalizar(false);
    };

    const {marca, modelo, precio, caracteristicas, img, stock} = product
    return(
        <div style={styles.container}>
            <div style={styles.box1}>
                <div style={styles.imgbox}>
                    <img style={styles.img} src={img} alt={modelo} />
                </div>
            </div>
            <div style={styles.box2}>
                <h2>{marca} {modelo}</h2>
                <p>${precio}</p>
                <p>{caracteristicas}</p>
                {finalizar ? <ItemCount stock={stock} initial="1" price={precio} finalizarCompra={finalizarCompra}/> : <Link to={"/cart"}><button style={styles.btn}>Finalizar Compra</button></Link> }
            </div>
        </div>
    );
};

export default ItemDetail;

const styles = {
    container:{ 
        width: '80%',
        height: 'calc(100vh - 6rem)',
        padding: '2rem',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5rem',
    },
    box1:{
        width: '50%',
        height: '30rem',
        backgroundColor: 'white',
        border: '2px solid rgb(185, 123, 123)',
    },
    box2:{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        gap: '2rem',
    },
    imgbox:{
        width: '100%',
        height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'scale-down' 
    },
    btn: {
        backgroundColor: 'rgb(185, 123, 123)',
        borderRadius: '.3rem',
        border: 'none',
    },
}