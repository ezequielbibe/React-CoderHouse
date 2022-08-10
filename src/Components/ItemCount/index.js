import React from "react";
import { useState } from "react";
const ItemCount = ({stock, initial, price, finalizarCompra}) => {

    const [cuenta, setCuenta] = useState(parseInt(initial))
    const count = (value) => {
        let result = cuenta + value;
        if(result <= stock && result >= parseInt(initial)) {
            setCuenta(cuenta + value)
        };
    };

    return(
        <div>
            <div style={styles.calc}>
                <p>Cantidad:</p>
                <div style={styles.cantidad}>
                    <button style={styles.btn} onClick={()=>count(-1)}>-</button>
                    <p>{cuenta}</p>
                    <button style={styles.btn} onClick={()=>count(+1)}>+</button>
                </div>
            </div>
            <p>Total: ${parseInt(price) * cuenta}</p>
            <div style={styles.btnbox}>
                <button style={styles.btn} onClick={()=>finalizarCompra(cuenta)}>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;   

const styles = {
    calc:{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    cantidad:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
    },
    btn: {
        backgroundColor: 'rgb(185, 123, 123)',
        borderRadius: '.3rem',
        border: 'none',
    },
    btnbox: {
        display: 'flex',
        gap: '1rem',
    }
}