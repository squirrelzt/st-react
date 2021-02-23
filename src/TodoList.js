import React, { Component } from "react";
import 'antd/dist/antd.css';
import store from "./store";
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators';
import TodoListUI from "./TodoListUI";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleStoreChange() {
        this.setState(store.getState())
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    handleBtnClick() {
        const action = getAddTodoItemAction();
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action = getDeleteTodoItemAction(index);
        store.dispatch(action)
    }
    render() {
        return <TodoListUI
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    handleItemDelete={this.handleItemDelete}
                />
    }
}

export default TodoList
