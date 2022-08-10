import React, {useEffect, useState} from "react";
import ItemList from "../ItemList";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';

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
      {loading ? 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      : <ItemList productList={productList}/>}
    </>    
  );
};

export default ItemListContainer;