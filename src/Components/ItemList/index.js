import React from "react";
import Item from "./Item"

const ItemList = ( {productList} ) =>{

    return(
        <div>
            <h3>Lista de Productos</h3>
            <div style={styles.container}>
                {productList.map((product) => <Item key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default ItemList

const styles={
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
}