import React, { useEffect, useState } from "react";
import {getData} from '../../mocks/fakeApi';
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div>
      {loading === false && productList.map((product) => <ItemDetail key={product.id} product={product} />)}
    </div>
  );
};

export default ItemDetailContainer;