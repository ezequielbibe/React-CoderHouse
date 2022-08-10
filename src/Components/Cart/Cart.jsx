import React, { useContext} from "react";
import {cartContext} from '../../Context/CartContext';
import CartTable from "./CartTable";
import Pagar from '../../MercadoPago/MercadoPago';

const Cart = ({usuarioGlobal}) => {
    
    const {cantidadProd, Productos, quitarProducto, limpiarProductos, precioTotal } = useContext(cartContext);
    
    const finalizarCompra = (e) => {
        e.preventDefault();
        Pagar(productosToMap);
    }
    const productosToMap = Productos.map((prod)=>{
        let nuevoElemento = 
        {
            title: `${prod.marca} ${prod.modelo}`,
            description: `descripcion de ${prod.modelo}`,
            picture_url: prod.img,
            category_id: prod.categoria,
            quantity: prod.cantidad,
            currency_id: "ARS",
            unit_price: prod.precio,
        }
        return nuevoElemento
    })

    return(
        <div style={styles.container}>
            <div style={styles.boxA}>
                <CartTable cantidadProd={cantidadProd} Productos={Productos} quitarProducto={quitarProducto} limpiarProductos={limpiarProductos} precioTotal={precioTotal}/>
                {((usuarioGlobal) && (Productos.length !== 0)) && <button style={styles.btn} onClick={finalizarCompra}>Finalizar Pago</button>}
                {((!usuarioGlobal) && (Productos.length !== 0)) && <p>Debes loguearte para realizar una compra!</p>}
            </div>
        </div>
    )
}

export default Cart


const styles = {
    btn: {
        border: 'none',
        borderRadius: '.5rem',
        backgroundColor: 'rgb(172, 59, 59)',
        color: 'white',
        width: '7rem',
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 'calc(100vh - 12rem)',
        gap: '1rem',
        boxSizing: 'border-box',
        padding: '1rem',
    },
    boxA: {
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: '1rem',
        gap: '1rem',
    },
    box2: {
        width: '20%',
        minHeight: '10rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
    },
}