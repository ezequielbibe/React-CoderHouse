import React from 'react'
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import { Link } from 'react-router-dom';

const Otros = () => {
    const atajos = [
        {
            id: 1,
            name: 'Accesorios de celular',
            path: '/category/accCelu',
            icon: <PhoneIphoneIcon style={styles.icon} />,
        },
        {
            id: 2,
            name: 'Accesorios para la Computadora',
            path: '/category/accCompu',
            icon: <ComputerIcon style={styles.icon}/>
        },
        {
            id: 3,
            name: 'Sillas Gamers',
            path: '/category/sillasGamer',
            icon: <EventSeatIcon style={styles.icon}/>
        }
    ]

    return(
        <div style={styles.container}>
            {atajos.map((item)=>(
                <Link to={item.path} key={item.id} style={styles.box}>
                    <div style={styles.box} className="hoverdeotros">
                        {item.icon}
                        <h4 style={styles.text}>{item.name}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Otros;

const styles = {

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '8rem',
        backgroundColor: 'white',
        borderRadius: '.5rem',
    },
    box:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
    },
    text:{
        fontSize: '1rem',
        color: 'black'
    },
    icon: {
        fontSize: '3rem',
        color: 'rgb(172, 59, 59)'
    }
}