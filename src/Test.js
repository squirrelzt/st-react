import React, { Component} from "react";

class Test extends Component{
    // 父组件的render执行，子组件也会执行
    render() {
        console.log('test render')
        return (
            <div>{this.props.content}</div>
        )

    }
}

export default Test;
