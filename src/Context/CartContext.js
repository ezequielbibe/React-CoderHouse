import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;


const CartCustomProvider = ({ children }) => {

    const [Productos, setProductos] = useState([]);

    const [cantidadProd, setCantidadProd] = useState(0);

    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
        consultarCantidadProd();
        total()
    },[Productos])

    const total = () => {
        let tot = 0;
        Productos.forEach(prod => tot += prod.cantidad * prod.precio);
        setPrecioTotal(tot);
    }

    const agregarProducto = (prod) => {
        if(consultaProductoEnCart(prod.id)) {
            const found = Productos.find(p => p.id === prod.id);
            const index = Productos.indexOf(found); 
            const aux = [...Productos];
            aux[index].cantidad += prod.cantidad;
            setProductos(aux);
        } else {
            setProductos([...Productos, prod]);
        }
    };

    const quitarProducto = (id) => {
        setProductos(Productos.filter(prod => prod.id !== id));
    };

    const consultaProductoEnCart = (id) => {
        return Productos.some(prod => prod.id === id);
    };

    const consultarCantidadProd = () => {
        let cantidad = 0;
        Productos.forEach(prod => cantidad += prod.cantidad);
        setCantidadProd(cantidad);
    }

    const limpiarProductos = () => {
        setProductos([]);
    };
     
    return(
        <Provider value={{Productos, cantidadProd, precioTotal, agregarProducto, quitarProducto, consultaProductoEnCart, consultarCantidadProd, limpiarProductos}}>
            {children}
        </Provider>
    );
}

export default CartCustomProvider;