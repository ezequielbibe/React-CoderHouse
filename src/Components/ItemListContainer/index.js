import React, {useEffect, useState} from "react";
import ItemCount from '../ItemCount';
import ItemList from "../ItemList/itemList";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);

    const products = [
        {marca: "Samsung Galaxy", modelo:"A53", precio: 93000, caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", id:"1"},
        {marca: "Samsung Galaxy", modelo:"S22 ULTRA", precio: "262999", caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", id:"2"},
        {marca: "Samsung Galaxy", modelo:"S21 FE", precio: "111999", caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", id:"3"},
        {marca: "Samsung Galaxy", modelo:"Z Flip3", precio: "118999", caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", id:"4"}
    ]

    const data = new Promise ((resolve, reject ) => {
        let condition = true;
        setTimeout(()=> {
            if (condition) {
                resolve(products);
            } else  {
                reject("algo salio mal");
            }
        }, 3000);
    })

    useEffect(()=>{
        data.then((res)=>setProductList(res));
    },[]);

    return(
        <>
            <h3>Bienvenido {greeting}</h3>
            <ItemCount stock="9" initial="1" name="Samsung A53" price="93000" />
            <ItemList productlist={productList}/>
        </>    
    );
};

export default ItemListContainer;