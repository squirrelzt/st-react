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
    Addition,
    Button,
    SearchWrapper
} from './style';

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
        focused: state.header.focused
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
