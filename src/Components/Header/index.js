import React from "react";
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LoginWidget from "./LoginWidget";

const Header = ({usuarioGlobal}) => {

    return (
        <header style={styles.container}>
            <div style={styles.containerLogo}>
                <StorefrontIcon />
                <h1 style={styles.nombre}>Tecno Bahia</h1>
            </div>
            <NavBar />
            <div style={styles.buttons}>
                <CartWidget usuarioGlobal={usuarioGlobal}/>
                <LoginWidget usuarioGlobal={usuarioGlobal}/>
            </div>
        </header>
    )
}

const styles = {
    cerrarbtn: {
        border: 'none',
        textDecoration: 'none',
        color: 'rgb(172, 59, 59)',
        backgroundColor: 'rgb(185, 123, 123)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '.5rem',
        border: 'none',
        height: '2.5rem',
        width: '2.5rem',
    },
    buttons: {
        display: 'flex',
        gap: '2rem',
    },
    link:{
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        display: 'flex',
        height: '6rem',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        margin: '0',
        backgroundColor: 'rgb(172, 59, 59)',
    },
    containerLogo: {
        display: 'flex',
        height: '2.5rem',
        width: 'auto',
        gap: '1rem',
        backgroundColor: 'rgb(185, 123, 123)',
        alignItems: 'center',
        padding: '0rem .5rem',
        boxSizing: 'border-box',
        borderRadius: '1rem',
        color: 'rgb(172, 59, 59)',
    },
    nombre:{
        fontSize: '1.5rem',
    },
}

export default Header;