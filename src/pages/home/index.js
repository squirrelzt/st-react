import React, { Component } from "react";
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import axios from 'axios';
import * as actionCreators from "../../common/header/store/actionCreators";

class Home extends Component {

    componentDidMount() {
        axios.get('/api/home.json').then((res)=>{
            console.log(res.data);
            const result = res.data.data;
            console.log(result);
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            };
            this.props.changeHomeDate(action);
        })
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
    changeHomeDate(action) {
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
