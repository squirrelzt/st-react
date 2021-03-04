import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from './store';

class Detail extends Component {

    componentDidMount() {
        this.props.getDetail();
    }
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
            </DetailWrapper>
        )
    }
}


const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail() {
            dispatch(actionCreators.getDetail());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
