import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { logout } from "../store/actions/auth";
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

const CustomMenu = (props) =>{
    const {authenticated} = props
    return(    
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
            <Image size='mini' src='/images/logo.png' style={{ marginRight: '1.5em' }} />
                React模版
            </Menu.Item>
            <Menu.Item as='a'><NavLink to="/">首页</NavLink></Menu.Item>
            {authenticated ?
                <Menu.Item as='a' onClick={()=>props.logout()}>注销</Menu.Item>
                :
                    <Menu.Item >
                        <NavLink to="/login">登录</NavLink>
                    </Menu.Item>
            }
            
        </Container>
        </Menu>
    );
}

const mapStateToProps = state => {
    return {
      authenticated: state.auth.token !== null,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout())
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(CustomMenu)
  );
  