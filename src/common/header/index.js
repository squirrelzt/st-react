import React from "react";
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import * as actionCreators from './store/actionCreators';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper
} from './style';

const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null;
    }
}
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe601;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames='slide'>
                        <NavSearch className={props.focused ? 'focused': ''}
                                   onFocus={props.handleInputFocus}
                                   onBlur={props.handleBlur}/>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe6dd;</i>
                    {getListArea(props.focused)}
                </SearchWrapper>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe616;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header)
