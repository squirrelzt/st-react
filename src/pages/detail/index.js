import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from './store';

class Detail extends PureComponent {

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
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
        getDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
