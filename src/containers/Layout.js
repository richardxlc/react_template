import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import {
  Container,
} from 'semantic-ui-react'

import CustomMenu from "../components/Menu";
import CustomFooter from "../components/Footer";

function CustomLayout (props){
  
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
