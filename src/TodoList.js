import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    handleInputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // });
        // this.setState(() => {
        //     return {
        //         inputValue: e.target.value
        //     }
        // });
        //解决异步问题
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }
    handleBtnClick() {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // });
        this.setState((prevState) => ({
            // list: [...this.state.list, this.state.inputValue],
            list: [...prevState.list, prevState.inputValue],
        }));
    }
    handleItemDelete(index) {
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list
        // });

        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(index, 1);
            return {
                list
            }
        });
        // 错误用法
        // this.state.list.splice(index, 1);
        // this.setState({
        //     list: this.state.list
        // })
    }
    getTodoItem() {
        return this.state.list.map((item,index) => {
            return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    >
                    {/*<li key={index}
                                       onClick={this.handleItemDelete.bind(this, index)}
                                       dangerouslySetInnerHTML={{__html:item}}></li>*/}
                    </TodoItem>
            )
        });
    }
    render() {
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    {/*这是注释*/}
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList
