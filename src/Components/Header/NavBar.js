import React from "react";

const  menuItems = [
    {
        id:1,
        label: 'Home',
        href: '/',
    },
    {
        id:2,
        label: 'Celulares',
        href: '/',
    },
    {
        id:3,
        label: 'Quienes Somos',
        href: '/',
    },
    {
        id:4,
        label: 'Contacto',
        href: '/',
    },
];


const NavBar = ()=> {
    return(
        <nav style={styles.nav}>
            <ul style={styles.nav}>
                {menuItems.map((item) => (
                    <li key={item.id}><a style={styles.a} href={item.href}>{item.label}</a></li>
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