import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import 'antd/dist/antd.css';
import '../App.css'
import { Layout,Menu,Breadcrumb  } from 'antd';

function CustomLayout (props){
  const { Header, Content, Footer } = Layout;
  const {authenticated,username} = props
  const [current,setCurrent] = useState('')
  
  const handleClick = e => {
    setCurrent(e.key)
  }
  return(    
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu onClick={handleClick} theme="dark" mode="horizontal" selectedKeys={current} >
        <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
        {authenticated ? (
          <React.Fragment>
          <Menu.Item key="profile">{username}</Menu.Item>
          <Menu.Item key="logout" onClick={()=> props.logout()}>注销</Menu.Item>
          </React.Fragment>
          ):(
            <React.Fragment>
            <Menu.Item key="login"><Link to="/login">登录</Link></Menu.Item>
            <Menu.Item key="signup"><Link to="/signup">注册</Link></Menu.Item>
          </React.Fragment>
        )}
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
        <Breadcrumb.Item>列表</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}


const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    username:state.auth.username
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
