import React from "react";
import { Link } from 'react-router-dom';
const  menuItems = [
    {
        id:1,
        label: 'Home',
        path: '/',
    },
    {
        id:2,
        label: 'Celulares',
        path: '/category/celulares',
    },
    {
        id:3,
        label: 'Computadoras',
        path: '/category/computadoras',
    },
    {
        id:4,
        label: 'Televisores',
        path: '/category/televisores',
    },
];


const NavBar = ()=> {
    return(
        <nav>
            <ul style={styles.nav}>
                {menuItems.map((item) => (
                    <Link key={item.id} style={styles.a} to={item.path}>{item.label}</Link>
                ))}
            </ul>
        </nav>
    );
};


const styles = {
    nav:{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        listStyleType: 'none',
        fontSize:'1.2rem',
        fontWeight: 'bold',
        gap: '2rem',
    },
    a:{
        color:'rgb(185, 123, 123)',
        textDecoration: 'none',
        padding: '0',
        margin: '0',
    },
}

export default NavBar;