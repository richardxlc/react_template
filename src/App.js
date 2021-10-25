import React, {useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import CustomLayout from "./containers/Layout";
import 'semantic-ui-css/semantic.min.css'


function App(props){
  useEffect (()=>{
    props.onTryAutoSignup();
  });
  return(
    <Router>
      <CustomLayout {...props}>
      <BaseRouter />
      </CustomLayout>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
