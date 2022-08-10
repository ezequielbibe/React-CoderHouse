import React from "react";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CartTable = ( { Productos, cantidadProd, quitarProducto, limpiarProductos, precioTotal}) => {
    return(
        <div style={styles.box1}>
                {Productos.length === 0 
                    ? <h1>No hay nada en el carrito, ir a la <Link style={styles.link} to="/">Tienda</Link></h1> 
                    :
                    <>
                        <TableContainer component={Paper} style={styles.table}>
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
                                        <TableCell align="right"><button style={styles.btn} onClick={()=>quitarProducto(prod.id)}>Quitar</button></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div style={styles.detalle}>
                            <button style={styles.btn} onClick={limpiarProductos}>Limpiar carrito</button>
                            <p>Cantidad de productos en total: {cantidadProd}</p>
                            <p>Precio total: ${precioTotal}</p>
                        </div>
                    </>
                    }
            </div>
    );
};

export default CartTable;

const styles = {
    detalle:{
        width: '100%',
    },
    link:{
        color: 'rgb(185, 123, 123)',

    },
    box1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '1rem',
    },
    btn: {
        border: 'none',
        backgroundColor: 'rgb(172, 59, 59)',
        color: 'white',
    }
}