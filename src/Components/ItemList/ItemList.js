import React from "react";
import Item from "./Item";

const ItemList = ( {productList} ) =>{
    return(
        <div>
            <h3>Lista de Productos</h3>
            {productList.map((product => <Item producto={product}/>))}
        </div>
    );
};

export default ItemList