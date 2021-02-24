import React, { Component } from "react";
import 'antd/dist/antd.css';
import store from "./store";
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction, getInitListAction } from './store/actionCreators';
import TodoListUI from "./TodoListUI";
import { connect } from "react-redux";

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
                    inputValue={this.props.inputValue}
                    list={this.props.list}
                    handleInputChange={this.props.handleInputChange}
                    handleBtnClick={this.props.handleBtnClick}
                    handleItemDelete={this.props.handleItemDelete}
                />
    }

    componentDidMount() {
        const action = getInitListAction();
        console.log(action);
        store.dispatch(action);
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleBtnClick(e) {
            const action = getAddTodoItemAction();
            dispatch(action);
        },
        handleItemDelete(index) {
            const action = getDeleteTodoItemAction(index);
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
