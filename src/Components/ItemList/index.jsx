import React from "react";
import { useParams } from 'react-router-dom';
import Item from "./Item";
import Redes from '../Redes';
import CarouselBox from "../Carousel";
import Acordeon from "../Acordeon";
import Otros from "../Otros";

const ItemList = ( {productList} ) =>{

    const { idCategory } = useParams()
    const defContainer = !idCategory ? styles.container : styles.containerB;
    return(
        <div style={styles.main}>
            <CarouselBox />
            <Otros />
            <h3>Lista de {idCategory ? idCategory : "Productos"}</h3>
            <div style={defContainer}>
                {productList.map((product) => <Item key={product.id} product={product} />)}
            </div>
            <Acordeon />
            <Redes />
        </div>
    );
};

export default ItemList

const styles={

    main: {
        display: 'flex',
        minHeight: 'calc(100vh - 12rem)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '2rem',
    },
    container:{
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
    },
    containerB: {
        width: '50%',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
    }
}