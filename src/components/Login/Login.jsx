import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <Form className="d-flex justify-content-center">
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;