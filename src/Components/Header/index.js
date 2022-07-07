import React from "react";
import Logo from '../../assets/images/Logo.png';
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.container}>
            <div style={styles.containerLogo}>
                <img style={styles.imagen} src={Logo} alt="Logo de la tienda"/>
                <h1>Tecno Bahia</h1>
            </div>
            <NavBar />
            <Link to='/cart'><CartWidget /></Link>
        </header>
    )
}

const styles = {
    container:{
        display: 'flex',
        height: '3rem',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box',
        borderBottom: '0.15rem solid rgb(172, 0, 230)',
        margin: '0'
    },
    containerLogo: {
        display: 'flex',
        height: '2.5rem',
        width: 'auto',
        gap: '1rem',
        alignItems: 'center',
        border: '0.2rem outset rgb(172, 0, 230)',
        padding: '0rem .5rem',
        boxSizing: 'border-box',
        borderRadius: '1rem',
    },
    imagen:{
        height: '100%',
        borderRadius: '1rem .5rem .5rem 1rem',
    },
}

export default Header;