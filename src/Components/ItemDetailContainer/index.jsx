import React, { useEffect, useState } from "react";
import { getDataOnly } from '../../mocks/fakeApi';
import ItemDetail from "./itemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idDetail } = useParams()

  useEffect(()=>{
    getDataOnly(idDetail)
    .then((res) => {
      setProductList(res);
    })
    .catch((res)=> {
      console.log(res);
    })
    .finally(() => {
      setLoading(false);
    })
  },[idDetail])

  return(
    <div>
      { loading === false && <ItemDetail product={productList}/> }
    </div>
  );
};

export default ItemDetailContainer;