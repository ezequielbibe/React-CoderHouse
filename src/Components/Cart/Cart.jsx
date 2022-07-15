import React, { useContext } from "react";
import {cartContext} from '../../Context/CartContext';

const Cart = () => {

    const { cantidadProd, Productos, quitarProducto, limpiarProductos } = useContext(cartContext);

    return(
        <>
            {Productos.map((prod)=>
                <div>
                    <h2>{prod.marca} {prod.modelo}</h2>
                    <p>{prod.precio} x {prod.cantidad}</p>
                    <button onClick={()=>quitarProducto(prod.id)}>Quitar</button>
                </div>
            )}
            <p>Cantidad de productos total: {cantidadProd}</p>
            <button onClick={limpiarProductos}>Limpiar carrito</button>
        </>
    )
}

export default Cart