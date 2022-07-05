import React from 'react';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

const App = () => {

    return(
        <>
            <Header />
            <div style={styles.main}>
                <ItemListContainer greeting="Coder House"/>
                <ItemDetailContainer />
            </div>
        </>
    );
};

export default App;


const styles = {
    main:{
        textAlign: 'center',
    }
}