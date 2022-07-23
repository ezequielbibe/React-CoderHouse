import React, { useContext } from "react";
import {cartContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () => {

    const { cantidadProd, Productos, quitarProducto, limpiarProductos, precioTotal } = useContext(cartContext);
    console.log(Productos)
    return(
        <div style={styles.container}>

            <div style={styles.box1}>
                {Productos.length === 0 
                    ? <h1>No hay nada en el carrito, ir a la <Link to="/">Tienda</Link></h1> 
                    : 
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableCell>Producto</TableCell>
                                <TableCell align="right">Cantidad</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {Productos.map((prod) => (
                                <TableRow key={prod.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{prod.marca} {prod.modelo}</TableCell>
                                    <TableCell align="right">{prod.cantidad}</TableCell>
                                    <TableCell align="right">${prod.precio}</TableCell>
                                    <TableCell align="right"><button onClick={()=>quitarProducto(prod.id)}>Quitar</button></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
}
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