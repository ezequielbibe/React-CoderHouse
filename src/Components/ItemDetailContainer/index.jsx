import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idDetail } = useParams()

  useEffect(()=>{

    const productsCollection = collection(db, 'productos');
    const refDoc = doc(productsCollection, idDetail);

    getDoc(refDoc)
    .then(result => {
      const prodId = {id: result.id, ...result.data()}
      setProductList(...productList, prodId);
    })
    .catch((res)=> {
      console.log(res);
    })
    .finally(() => {
      setLoading(false);
    })
  },[idDetail])

  return(
    <div style={styles.a}>
      { loading === false && <ItemDetail product={productList}/> }
    </div>
  );
};

export default ItemDetailContainer;

const styles = {
  a:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}