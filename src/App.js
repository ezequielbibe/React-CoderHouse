import { height } from '@mui/system';
import React from 'react';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';

const App = () => {

    return(
        <>
            <Header />
            <div style={styles.main}>
                <ItemListContainer greeting="Coder House"/>
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