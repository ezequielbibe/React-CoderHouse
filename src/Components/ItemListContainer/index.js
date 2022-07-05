import React, {useEffect, useState} from "react";
import ItemCount from '../ItemCount';
import ItemList from "../ItemList";
import { getData } from "../../mocks/fakeApi";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)

    const getProducts = async () => {
        try{
          const respuesta = await getData
          setProductList(respuesta)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }

      useEffect(()=>{
        getProducts()
      },[])

    return(
        <>
          <h3>Bienvenido {greeting}</h3>
          <ItemCount stock="9" initial="1" name="Samsung A53" price="93000" />
          {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
        </>    
    );
};

export default ItemListContainer;