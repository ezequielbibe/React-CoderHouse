import React from "react";
import ItemCount from '../ItemCount';

const ItemListContainer = ({greeting}) => {

    return(
        <>
            <h3>Bienvenido {greeting}</h3>
            <ItemCount stock="9" initial="1" name="Samsung A53" price="93000" />
        </>    
    );
};

export default ItemListContainer;