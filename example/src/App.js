import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { LoginForm, RegisterForm } from 'react-barong';

const SignInAuth = LoadingProp => (WrappedComponent) => {
  class SignIn extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          url={LoadingProp}
        />
      );
    }
  }

  return SignIn;
};

const SignUpAuth = LoadingProp => (WrappedComponent) => {
  class SignUp extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          url={LoadingProp}
        />
      );
    }
  }

  return SignUp;
};


export default class ExampleApp extends Component {
  render () {
  const Login = SignInAuth("http://localhost:3000/api/v2/identity/users")(LoginForm);
  const Signup = SignUpAuth("http://localhost:3000/api/v2/identity/sessions")(RegisterForm);
  return (
      <Tabs fill justify defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="SignIn">
          <Login />
        </Tab>
        <Tab eventKey="create-account" title="SignUp">
          <Signup />
        </Tab>
      </Tabs>
    )
  }
}
