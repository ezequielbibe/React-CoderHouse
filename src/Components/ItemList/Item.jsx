import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) => {
    const {marca, modelo, precio, img, id} = product
    return(
        <div style={styles.container}>
            <h3>{marca} {modelo}</h3>
            <div style={styles.imgbox}>
                <img src={img} alt={modelo} style={styles.img}/>
            </div>
            <p style={styles.precio}>${precio}</p>
            <Link to={`/detail/${id}`} style={styles.button}>Ver mas</Link>
        </div>
    );
}

export default Item;


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        width: '20rem',
        height: '30rem',
        padding: '.5rem',
        boxSizing: 'border-box',
        boxShadow: '0px -1px 24px 3px rgba(0,0,0,0.44)',
        borderRadius: '10px',
        border: '1px solid rgb(172, 0, 230)'
    },
    img:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    imgbox: {
        width: '100%',
        height: '60%',
    },
    button: {
        width: '5rem',
        height: '2rem',
        paddin: '0.5rem',
        boxSizing: 'border-box',
        backgroundColor: 'rgb(172, 0, 230)',
        color: 'white',
        borderRadius: '5px',
        textAlign: 'center'
    },
    precio: {
        fontSize: '1.2rem',
    }
}