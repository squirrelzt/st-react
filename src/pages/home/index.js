import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

class Home extends Component {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload-images.jianshu.io/upload_images/2509688-c7c947ca37db637c.png"/>
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

export default Home;
