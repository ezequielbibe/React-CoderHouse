import React, { useContext } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {cartContext} from '../../Context/CartContext';

const CartWidget = () => {

    const { cantidadProd } = useContext(cartContext);

    return(
        <button style={styles.button}>
            {cantidadProd !== 0 && <p>{cantidadProd}</p>}
            <ShoppingBagIcon style={styles.icon}/>
        </button>
    );
};

export default CartWidget;

const styles = {

    button: {
        borderColor: 'rgb(172, 0, 230)',
        backgroundColor: 'white',
        display: 'flex',
    },
    icon:{
        color: 'rgb(172, 0, 230)',
    }
}