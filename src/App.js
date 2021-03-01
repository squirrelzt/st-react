import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header'
import store from "./store";

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Header/>
                <BrowserRouter>
                    <Route path='/' exact render={() => <div>home</div>}></Route>
                    <Route path='/detail' exact render={() => <div>detail</div>}></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
