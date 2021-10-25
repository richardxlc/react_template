import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import 'antd/dist/antd.css';
import { useState } from "react";
import { Layout } from 'antd';


function CustomLayout (props){
  const {authenticated} = props
  const [current,setCurrent] = useState('')
  const handleClick = e => {
    //console.log('click',e)
    setCurrent(e.key)
  }
  return(    
    <Layout>
        <Layout.Header>
        <Menu onClick={handleClick} selectedKeys={{current}} mode="horizontal">
          <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
          {authenticated ? (
            <Menu.Item key="logout" onClick={()=>props.logout()}>注销</Menu.Item>
            ):
            (
            <React.Fragment>
            <Menu.Item key="login"><Link to="/login">登录</Link></Menu.Item>
            <Menu.Item key="signup"><Link to="/signup">注册</Link></Menu.Item>
            </React.Fragment>
          )}
          
        </Menu>
        </Layout.Header>
        <Layout.Content>
        {props.children}
        </Layout.Content>
        
        <Layout.Footer>
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src="/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Layout.Footer>
      </Layout>
  );
}


const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
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
  )(CustomLayout)
);
