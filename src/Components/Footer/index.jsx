import React from "react";

const Footer = () => {

    return(
        <footer style={styles.container}>
            <h4>Vuelva prontos</h4>
        </footer>
    )
};

export default Footer;

const styles = {

    container:{
        display: 'flex',
        height: '6rem',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box',
        margin: '0',
        backgroundColor: 'white',
    },
}