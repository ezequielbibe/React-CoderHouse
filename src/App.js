import React from 'react';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import CartCustomProvider from './Context/CartContext';

const App = () => {

    return(
        <BrowserRouter>
            <CartCustomProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Coder House"/>} />
                    <Route path="/category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/detail/:idDetail" element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart /> }/>
                </Routes>
            </CartCustomProvider>
        </BrowserRouter>
    );
};

export default App;