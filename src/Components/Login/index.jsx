import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { firebaseApp} from '../../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = ({usuarioGlobal}) => {
    const [estaRegistrandose,  setEstaRegistrandose] = useState(false);

    const submitHandler = async (e) =>{
        e.preventDefault();
        const correo = e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;
        if(estaRegistrandose) {
            await createUserWithEmailAndPassword(auth, correo, password)
            .then(()=> {
                window.location = '/';
            })
            .catch((error)=>{
                console.error(error);
            })
        }else {
            await signInWithEmailAndPassword(auth, correo, password)
            .then(()=> {
                window.location = '/';
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    };

    const entrar = () => {
        setEstaRegistrandose(!estaRegistrandose)
    }
    const entrarConGoogle = () => {
        signInWithRedirect(auth, googleProvider)
    }

    return(
            <div style={styles.container}>
                {usuarioGlobal ? <h2>Sesion iniciada</h2> :
                <>
                <h2>{estaRegistrandose ? "Registrate" : "Inicia Sesion"}</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" />
                        <Form.Text className="text-muted">Nunca compartiremos su correo electrónico con nadie más.</Form.Text>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" />
                    </Form.Group>
                    <Button style={styles.btn} type="submit">{estaRegistrandose ? "Registrate" : "Iniciar Sesion"}</Button>
                    <Button style={styles.btn} type="submit" onClick={entrarConGoogle}>Acceder con Google</Button>
                    <Button style={styles.btn} onClick={entrar} >{estaRegistrandose ? '¿Ya tienes cuenta? Inicia sesion' : 'No tienes cuenta? Registrate'}</Button>
                </Form>
                </>
                }
            </div>
    );
}

export default Login;

const styles = {
    container: {
        width: '100vw',
        height: 'calc(100vh - 12rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'rgb(185, 123, 123)',
        borderRadius: '.3rem',
        border: 'none',
        margin: '.5rem'
    },
}