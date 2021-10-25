import React from "react";
import { connect } from "react-redux";
import {Redirect } from "react-router-dom";
import { authLogin } from "../store/actions/auth";
import { Button, Checkbox, Form } from 'semantic-ui-react'
function LoginForm (props) {
  const { token} = props;
  const onFinish = (values) => {
    //console.log('Received values of form: ', values);
    props.login(values.username,values.password)
  };
  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
