import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST } from './actionTypes'
import axios from "axios";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteTodoItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
});

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:8888/api/todolist')
            .then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        })
    }
};
