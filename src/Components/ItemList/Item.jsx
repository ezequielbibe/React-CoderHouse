import React, { useState } from "react";
import { Link, useParams} from "react-router-dom";
import './style.css';

const Item = ({product}) => {
    const [mouseBox, setMouseBox] = useState(1);
    
    const mouseBoxAction = (a) => {
        setMouseBox(mouseBox + a); 
    };
    const { idCategory } = useParams()
    let border = mouseBox === 0 ? "border" : 'nada';

    const {marca ,modelo, precio, img, id} = product;

    if(idCategory === undefined){
        return(
            <Link to={`/detail/${id}`} style={styles.link}> 
                <div className={border} style={styles.container} onMouseEnter={()=>mouseBoxAction(-1)} onMouseLeave={()=>mouseBoxAction(1)}>
                    <div style={styles.imgbox}>
                        <img src={img} alt={modelo} style={styles.img}/>
                    </div>
                    <p style={styles.precio}>${precio}</p>
                </div>
            </Link>
        );
    }else{
        return(
            <Link to={`/detail/${id}`} style={styles.linkB}> 
                <div className={border} style={styles.containerB}>
                    <div style={styles.imgboxB}>
                        <img src={img} alt={modelo} style={styles.img}/>
                    </div>
                    <div style={styles.containerText}>
                        <h3 style={styles.text}>{marca} {modelo}</h3>
                        <p style={styles.precio}>${precio}</p>
                    </div>
                </div>
            </Link>
        );
    };
};

export default Item;


const styles = {
    link: {
        textDecoration: 'none',
    },
    linkB: {
        textDecoration: 'none',
        width: '100%'
    },
    containerB: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
        width: '100%',
        height: '10rem',
        padding: '.5rem',
        boxSizing: 'border-box',
        borderRadius: '10px',
        backgroundColor: 'white',
    },
    containerText: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: '1.1rem',
        color: 'rgb(172, 59, 59)'
    },
    imgboxB: {
        width: '20%',
        height: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        width: '10rem',
        height: '15rem',
        padding: '.5rem',
        boxSizing: 'border-box',
        borderRadius: '10px',
        backgroundColor: 'white',
    },
    img:{
        width: '100%',
        height: '100%',
        objectFit: 'scale-down',
    },
    imgbox: {
        width: '100%',
        height: '80%',
    },
    precio: {
        fontSize: '1.2rem',
        color: 'black',
    }
}