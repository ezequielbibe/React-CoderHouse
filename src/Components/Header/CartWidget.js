import React, { useContext } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {cartContext} from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cantidadProd } = useContext(cartContext);

    return(
        <Link to="/cart" style={styles.button}>
            <p>{cantidadProd !== 0 && cantidadProd}</p>
            <ShoppingBagIcon />
        </Link>
    );
};

export default CartWidget;

const styles = {
    p: {
        textDecoration: 'none'
    },
    button: {
        textDecoration: 'none',
        color: 'rgb(172, 59, 59)',
        backgroundColor: 'rgb(185, 123, 123)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '.5rem',
        border: 'none',
        height: '2.5rem',
        width: '2.5rem',
    },
}