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
    }
    return state;
}
