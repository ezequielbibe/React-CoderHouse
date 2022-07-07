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
        <nav style={styles.nav}>
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
}

export default NavBar;