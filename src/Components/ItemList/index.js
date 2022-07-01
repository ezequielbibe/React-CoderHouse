import React from "react";
import Item from "./Item"

const ItemList = ( {productList} ) =>{

    return(
        <div>
            <h3>Lista de Productos</h3>
            <div>
                {productList.map((product) => <Item product={product} />)}
            </div>
        </div>
    );
};

export default ItemList