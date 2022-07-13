import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, price, finalizarCompra}) => {

    const [cuenta, setCuenta] = useState(parseInt(initial))
    const count = (value) => {
        const result = cuenta + value;
        if(result <= stock && result >= parseInt(initial)) {
            setCuenta(cuenta + value)
        };
    };

    return(
        <div>
            <div style={styles.calc}>
                <p>Cantidad:</p>
                <button onClick={()=>count(-1)}>-</button>
                <span>{cuenta}</span>
                <button onClick={()=>count(+1)}>+</button>
            </div>
            <p>Total: ${parseInt(price) * cuenta}</p>
            <button>Comprar</button>
            <button onClick={finalizarCompra}>Añadir al carrito</button>
        </div>
    );
};

export default ItemCount;   

const styles = {
    calc:{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    }
}