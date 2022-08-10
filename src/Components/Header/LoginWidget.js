import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Link } from 'react-router-dom';
import { getAuth,signOut } from 'firebase/auth';
import { firebaseApp } from '../../firebase/firebase';

const auth = getAuth(firebaseApp);

const LoginWidget = ({ usuarioGlobal }) => {

    const cerrarSesion = () => {
        signOut(auth);
        window.location = '/'
    }

    return(
        <>
            {!usuarioGlobal && 
            <Link to={usuarioGlobal ? '/user' : '/login'} style={styles.button}>
                <AccountCircleIcon />
            </Link>}
            {usuarioGlobal && <button style={styles.button} onClick={cerrarSesion}><MeetingRoomIcon /></button>}
        </>
    );
}

export default LoginWidget

const styles = {
    p: {
        textDecoration: 'none'
    },
    button: {
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
}