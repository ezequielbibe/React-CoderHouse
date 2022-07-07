import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({product}) => {
    console.log(product)
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
                <ItemCount stock={stock} initial="1" price={precio} />
            </div>
        </div>
    );
};

export default ItemDetail;

const styles = {
    container:{ 
        width: '100%',
        height: 'calc(100vh - 3rem)',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        padding: '2rem',
        boxSizing: 'border-box',
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