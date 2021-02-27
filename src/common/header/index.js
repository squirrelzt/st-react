import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    render() {
        return (
            <Fragment>
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
                                in={this.state.focused}
                                timeout={200}
                                classNames='slide'>
                                <NavSearch className={this.state.focused ? 'focused': ''}
                                           onFocus={this.handleInputFocus}
                                           onBlur={this.handleBlur}/>
                            </CSSTransition>
                            <i className={this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe6dd;</i>
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
            </Fragment>
        )
    }
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header
