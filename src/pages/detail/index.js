import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";

class Detail extends Component {

    render() {
        return (
            <DetailWrapper>
                <Header>
                    张小龙：保持克制做产品
                </Header>
                <Content>
                    <img src='//upload-images.jianshu.io/upload_images/6313421-c983fdf0a10b892a?imageMogr2/auto-orient/strip|imageView2/2/w/1010/format/webp'/>
                    <p>做产品经理的同学应该深有体会，任何一个互联网产品都有所谓的场景化设计。</p>
                    <p>用户在产品中存在不同场景的切换，需要有对应的功能体现。比如在办公场景、回家场景、个人在家场景下，我们家中会在不同场景下提供不同装饰。</p>
                    <p><b>2.在场景背后，还有一个称呼叫做用户路径。</b></p>
                    <p>用户路径简单来说可以下面描述：  用户访问产品的起点、过程页面、最终落地页面，这是产品提供的主要功能边界。</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;
