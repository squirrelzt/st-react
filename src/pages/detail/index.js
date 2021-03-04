import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from "./style";

class Detail extends Component {

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

        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
