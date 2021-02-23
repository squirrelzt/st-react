import React, { Component, Fragment } from "react";
import {Button, Input, List} from "antd";


class TodoListUI extends Component {

    render() {
        return(
            <Fragment>
                <Input placeholder='todo info'
                       style={{width: '300px', marginRight: '10px'}}
                       value={this.props.inputValue}
                       onChange={this.props.handleInputChange}
                />
                <Button type='primary' onClick={this.props.handleBtnClick}>提交</Button>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index) => this.props.handleItemDelete(index)}>{item}</List.Item>)}
                />
            </Fragment>
        )
    }
}

export default TodoListUI
