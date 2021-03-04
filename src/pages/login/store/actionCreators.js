import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = (title, content) => ({
   type: actionTypes.CHANGE_LOGIN,
    value: true
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+ account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin())
            } else {
                alert('登录成功')
            }
            // dispatch(changeDetail(result.title, result.content))
        })
    }
};

