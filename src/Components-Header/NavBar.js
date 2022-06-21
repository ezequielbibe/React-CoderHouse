import React from "react";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const NavBar = ()=> {
    return(
        <nav style={styles.nav}>
            <ul style={styles.nav}>
                <li><a style={styles.b}  href="">Home</a></li>
                <li><a style={styles.a} href="">Celulares</a></li>
                <li><a style={styles.a} href="">Quienes Somos</a></li>
                <li><a style={styles.a} href="">Contacto</a></li>
                <li><LocalMallIcon style={styles.c} fontSize="large"/></li>
            </ul>
        </nav>
    )
}
const styles = {
    nav:{
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',
        gap:'2rem',
        fontSize:'1.2rem',
        fontWeight: 'bold',
    },
    a:{
        color:'rgb(172, 0, 230)',
        textDecoration: 'none',
    },
    b: {
        display: 'inline-block',
        padding: '0.5rem',
        boxSizing: 'border-box',
        color: 'white',
        textDecoration: 'none',
        backgroundColor: 'rgb(172, 0, 230)',
        borderRadius: '.7rem'
    },
    c: {
        color: 'rgb(172, 0, 230)',
    }

}

export default NavBar;