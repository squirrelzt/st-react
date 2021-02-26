import React, { Component, Fragment } from 'react';
import Header from './common/header'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header/>
            </Fragment>
        )
    }
}

export default App
