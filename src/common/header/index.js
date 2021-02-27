import React, { Component, Fragment } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';

class Header extends Component {

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
                            <NavSearch />
                            <i className="iconfont">&#xe6dd;</i>
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
}

export default Header
