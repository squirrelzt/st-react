import React, { Component } from "react";
import 'antd/dist/antd.css';
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction, getInitListAction } from './store/actionCreators';
import TodoListUI from "./TodoListUI";
import { connect } from "react-redux";

class TodoList extends Component {

    render() {
        const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = this.props;
        return <TodoListUI
                    inputValue={inputValue}
                    list={list}
                    handleInputChange={handleInputChange}
                    handleBtnClick={handleBtnClick}
                    handleItemDelete={handleItemDelete}
                />
    }

    componentDidMount() {
        this.props.initList();
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
        },
        initList() {
            const action = getInitListAction();
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
