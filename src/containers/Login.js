import React, { useState } from "react";
import { connect } from "react-redux";
import {Redirect } from "react-router-dom";
import { authLogin } from "../store/actions/auth";
import { Button,  Form, Header, } from 'semantic-ui-react'


function LoginForm (props) {
  const { token,loading} = props;
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  function onUsernameChange(e){
    setUsername(e.target.value)
  }
  function onPasswordChange(e){
    setPassword(e.target.value)
  }
  function handleSubmit (e){
    if(username!=="" && password!==""){
      props.login(username,password)
    }
  };
  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{marginTop:'11em',marginBottom:'11em'}}>
      <Header>登录</Header>
      <hr/>
      {loading && 
        <div class="ui active centered inline loader"></div>
    }
    <Form onSubmit={handleSubmit} >

      <Form.Field>
        <label>用户名</label>
        <input placeholder='用户名' type="text" value={username} name="username" onChange={onUsernameChange}/>
      </Form.Field>
      <Form.Field>
        <label>密码</label>
        <input placeholder='密码' type="password" value={password} name="password" onChange={onPasswordChange}/>
      </Form.Field>
      
      <Button type='submit' disabled={loading} loading={loading}>登录</Button>
    </Form>
    </div>
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
