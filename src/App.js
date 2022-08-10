import React, { useState } from 'react';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import CartCustomProvider from './Context/CartContext';
import Footer from './Components/Footer';
import Success from './MercadoPago/Success';
import Login from './Components/Login';
import { firebaseApp } from './firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './index.css';
const auth = getAuth(firebaseApp);


const App = () => {

    const [usuarioGlobal, setUsuarioGlobal] = useState(null);
    
    onAuthStateChanged(auth, (user) =>{
        if(user){
            setUsuarioGlobal(user);
        } else{ 
            setUsuarioGlobal(null);
        }
    })

    return(
        <BrowserRouter>
            <CartCustomProvider>
                <Header usuarioGlobal={usuarioGlobal} />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Coder House"/>} />
                    <Route path="/category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/detail/:idDetail" element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart usuarioGlobal={usuarioGlobal}/> }/>
                    <Route path='/mp/:idMp' element={<Success />} />
                    <Route path='login' element={<Login usuarioGlobal={usuarioGlobal}/>} />
                    {usuarioGlobal && <Route path='/mp/exito' element={<Success correoUsuario={usuarioGlobal.email}/>}/>}
                </Routes>
                <Footer />
            </CartCustomProvider>
        </BrowserRouter>
    );
};

export default App;