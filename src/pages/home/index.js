import React, { Component } from "react";
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from './store';

class Home extends Component {

    componentDidMount() {
        this.props.changeHomeDate();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
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
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }

            </HomeWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        showScroll: state.getIn(['home', 'showScroll'])
    }
};

const mapDispatchToProps = (dispatch) => ({
    changeHomeDate() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
