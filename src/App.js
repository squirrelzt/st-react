import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header'
import store from "./store";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Header/>
            </Provider>
        )
    }
}

export default App
