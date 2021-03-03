import React, { Component } from "react";
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from './store';

class Home extends Component {

    componentDidMount() {
        this.props.changeHomeDate();
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                         src='//upload-images.jianshu.io/upload_images/2509688-c7c947ca37db637c.png'
                         alt=''
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
};

const mapDispatchToProps = (dispatch) => ({
    changeHomeDate() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
