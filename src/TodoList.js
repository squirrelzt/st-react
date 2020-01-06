import React, { Component, Fragment } from "react";

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return(
            <Fragment>
                <div><input/><button>提交</button></div>
                <ul></ul>
            </Fragment>
        )
    }
}

export default TodoList
