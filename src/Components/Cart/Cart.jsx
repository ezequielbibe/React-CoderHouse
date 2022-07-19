import React, { useContext } from "react";
import {cartContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cantidadProd, Productos, quitarProducto, limpiarProductos, precioTotal } = useContext(cartContext);
    console.log(Productos)
    return(
        <div style={styles.container}>

            <div style={styles.box1}>
                {Productos.length === 0 
                    ? <h1>No hay nada en el carrito, ir a la <Link to="/">Tienda</Link></h1> 
                    : 
                
                Productos.map((prod)=>
                    <div style={styles.item}>
                        <div style={styles.itemNombre}>
                            <h4>{prod.marca} {prod.modelo}</h4>
                        </div>
                        <div style={styles.itemCantidad}>
                            <p>${prod.precio} x {prod.cantidad}</p>
                        </div>
                        <div style={styles.itemAcciones}>
                            <button onClick={()=>quitarProducto(prod.id)}>Quitar</button>
                        </div>
                    </div>
                )}
                {Productos.length !== 0 && (<button onClick={limpiarProductos}>Limpiar carrito</button>)}
                <p>Cantidad de productos total: {cantidadProd}</p>
            </div>

            <div style={styles.box2}> 
                <p>Total: $ {precioTotal}</p>
            </div>
        </div>
    )
}

export default Cart


const styles = {

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: 'calc(100vh - 3rem)',
        gap: '1rem',
        boxSizing: 'border-box',
        padding: '1rem',
    },
    box1: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid gray',
        boxSizing: 'border-box',
        padding: '1rem',
    },
    box2: {
        width: '20%',
        minHeight: '10rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
    },
    item: {
        width: '100%',
        height: '3rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemNombre:{
        width: '80%',
    },
    itemCantidad:{
        width: '10%',
    },
    itemAcciones:{
        width: '15%',
    }

}