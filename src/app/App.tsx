import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../App.css';
import Routes from './route/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootStore from './redux/rootStore';


const store = createStore(rootStore);

const App = () => {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
