import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import App from './App';
import { GlobalStyle } from './style.js';

const Mount = (
    <Provider store={store}>
        <GlobalStyle/>
        <App/>
    </Provider>
);

ReactDOM.render(Mount, document.getElementById('root'));

