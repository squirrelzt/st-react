import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import App from './App';
import { GlobalStyle } from './style.js';
import { IconfontGlobalStyle } from './static/iconfont/iconfont';

const Mount = (
    <Provider store={store}>
        <GlobalStyle/>
        <IconfontGlobalStyle/>
        <App/>
    </Provider>
);

ReactDOM.render(Mount, document.getElementById('root'));

