import { Description } from "@mui/icons-material";
import React from "react";

const ItemDetail = ({product}) => {
    const {marca, modelo, precio, caracteristicas, img} = product
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
                <button>Comprar</button>
                <button>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;

const styles = {
    container:{ 
        width: '100%',
        height: '100vh',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1:{
        width: '50%'
    },
    box2:{
        width: '50%'
    },
    imgbox:{
        width: '70%',
        height: '70%',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' 
    }
}