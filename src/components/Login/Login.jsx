import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import * as AuthActions from '../../store/actions/login';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

// Amit beküldünk a store-ba
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(AuthActions.Login('blaskoi', 'valami'))
  }
}

// Amit kapunk a store-ból
const mapStateToProps = (state, match) => {
  console.log("LoginComponent: " + JSON.stringify(state))
  return {
    loginstate: state.Login.authentication
  }
}

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { loginstate } = this.props;
    if (loginstate) {
      console.log("BE VAGYOK LÉPVE!");
      return null;
    }
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <div className="m-3 loginContainer">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="email" hidden>Email</Label>
              <Input type="email" name="email" autoComplete="off" id="email" placeholder="Email" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password" hidden>Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
            </FormGroup>
            <Button className="w-100">Login</Button>
          </Form>
        </div>
        <div className="m-3">
          <Link to="/registration">Registration</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));