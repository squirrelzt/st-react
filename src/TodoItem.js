import React, { Component } from "react";
import PropTypes from 'prop-types';



class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
        // this.props.deleteItem(this.props.index)
    }
    render() {
        const { content } = this.props;
        // JSX --> JS -->虚拟DOM --> 真实DOM

        return (
            <div onClick={this.handleClick}>{content}</div>
        )
        // return React.createElement('div', {}, 'item');
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number.isRequired
}

TodoItem.defaultProps = {
    content: ''
}
export default TodoItem
