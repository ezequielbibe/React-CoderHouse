import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, name, price, image}) => {

    const [cuenta, setCuenta] = useState(parseInt(initial))
    const count = (value) => {
        const result = cuenta + value;
        if(result <= parseInt(stock) && result >= parseInt(initial)) {
            setCuenta(cuenta + value)
        };
    };

    return(
        <div>
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <div>
                <button onClick={()=>count(-1)}>-</button>
                <span>{cuenta}</span>
                <button onClick={()=>count(+1)}>+</button>
            </div>
            <p>Total: ${parseInt(price) * cuenta}</p>
            <button>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;   