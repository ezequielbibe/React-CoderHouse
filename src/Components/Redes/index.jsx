import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './style.css';

const Redes = () => {
    const redes = [
        {
            id: 1,
            icon: <FacebookIcon className="links" style={styles.icon}/>,
            to: 'https://www.facebook.com/',
        },
        {
            id: 2,
            icon: <TwitterIcon className="links" style={styles.icon} />,
            to: 'https://www.twitter.com',
        },
        {
            id: 3,
            icon: <WhatsAppIcon className="links" style={styles.icon} />,
            to: 'https://web.whatsapp.com/',
        },
    ]

    return(
        <div style={styles.main}>
            <h2>Comunicate con nosotros!</h2>
            <div style={styles.container}>
                {redes.map((result)=> (
                <div style={styles.box} key={result.id}>
                    <a href={result.to} target="new">{result.icon}</a>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Redes;

const styles = {

    main: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 'auto',
        boxSizing: 'border-box',
        padding: '.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '.5rem'
    },
    container:{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
    },

    icon: {
        fontSize: '5rem',
    },
}