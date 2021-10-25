import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

import CustomMenu from "../components/Menu";
import CustomFooter from "../components/Footer";

function CustomLayout (props){
  const {authenticated,username} = props
  const [current,setCurrent] = useState('')
  
  const handleClick = e => {
    setCurrent(e.key)
  }
  return(    
    <div>
      <CustomMenu />

      <Container text style={{ marginTop: '7em' }}>
        {props.children}            
      </Container>

      <CustomFooter />
  </div>
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
  )(CustomLayout)
);
