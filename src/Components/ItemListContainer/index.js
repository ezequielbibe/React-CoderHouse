import React, {useEffect, useState} from "react";
import ItemList from "../ItemList";
import { getData } from "../../mocks/fakeApi";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

  const { idCategory } = useParams()

  useEffect(()=>{
    getData(idCategory)
    .then((res) => {
      setProductList(res);
    })
    .catch((res)=> {
      console.log(res);
    })
    .finally(() => {
      setLoading(false);
    })
  },[idCategory])

  return(
    <>
      <h3>Bienvenido {greeting}</h3>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
    </>    
  );
};

export default ItemListContainer;