const defaultState = {
    inputValue: '',
    list: []
}

// reducer可以接收state，不能修改
export default (state = defaultState, action) => {
    // console.log(state, action)
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    } else if (action.type === 'add_todo_item') {
        const  newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    } else if (action.type === 'delete_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}
