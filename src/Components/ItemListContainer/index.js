import React, {useEffect, useState} from "react";
import ItemList from "../ItemList";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = ({greeting}) => {

  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

  const { idCategory } = useParams()

  useEffect(()=>{
    const productsCollection = collection(db, 'productos');
    const consulta = idCategory === undefined ? productsCollection : query(productsCollection, where('categoria', '==', idCategory));

    getDocs(consulta)
    .then(result => {
      const lista = result.docs.map(product => {
        return {
          id: product.id,
          ...product.data(),
        }
      })
      setProductList(lista)
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