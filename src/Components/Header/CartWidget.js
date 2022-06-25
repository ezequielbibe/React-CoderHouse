import React from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const CartWidget = () => {
    return(
        <button style={styles.button}><ShoppingBagIcon style={styles.icon}/></button>
    );
};

export default CartWidget;

const styles = {

    button: {
        borderColor: 'rgb(172, 0, 230)',
        backgroundColor: 'white',
    },
    icon:{
        color: 'rgb(172, 0, 230)',
    }
}