import React from "react";

const Item = ({product}) => {
    const {marca, modelo, precio} = product
    return(
        <div>
            <h3>{marca} {modelo}</h3>
            <p>{precio}</p>
        </div>
    );
}

export default Item;