import React, { Component, Fragment } from "react";
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
    'javascript',
    'java',
    'golang',
    'python',
    'electron',
];

class TodoList extends Component {


    render() {
        return (
            <Fragment>
                <Input placeholder='todo info' style={{width: '300px', marginRight: '10px'}}></Input>
                <Button type='primary'>提交</Button>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </Fragment>
        )
    }
}

export default TodoList
