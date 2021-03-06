import { AppConfig } from "../../_helpers/application-config";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as AuthActions from "../../store/actions/authentication";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert
} from "reactstrap";
import "./Login.css";

// Amit beküldünk a store-ba (mapDispatchToProps)
const toStore = dispatch => {
  return {
    login: (email, password) => dispatch(AuthActions.Login(email, password))
  };
};

// Amit kapunk a store-ból (mapStateToProps)
const fromStore = (state) => {
  //console.log("LoginComponent: " + JSON.stringify(state));
  return {
    loginstate: state.Login.authentication,
    loginmsg: state.Login.msg
  };
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false,
      loginerror: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("Config serverUrl: " + AppConfig.serverUrl);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.setState({ submitted: true });
    if (this.state.email && this.state.password) {
      this.props.login(this.state.email, this.state.password);
      this.props.history.push("/home");
    }
  };

  render() {
    const { loginstate, loginmsg } = this.props;
    if (loginstate) {
      console.log("Átirányítás a home page-re");
      return null;
    }
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100 m-1">
        <div className="loginContainer fadeIn animated">
          <div className="logo mb-3">
            <div className="col-md-12 text-center text-white">
              <h4>Bejelentkezés</h4>
            </div>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="email" hidden>
                Email
              </Label>
              <Input
                type="email"
                name="email"
                autoComplete="off"
                id="email"
                placeholder="Email cím"
                onChange={this.handleChange}
                invalid={this.state.submitted && !this.state.email}
              />
              <FormFeedback>Email cím kötelező</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password" hidden>
                Jelszó
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Jelszó"
                onChange={this.handleChange}
                invalid={this.state.submitted && !this.state.password}
              />
              <FormFeedback>Jelszó kötelező</FormFeedback>
            </FormGroup>
            <Button className="w-100" color="primary">
              Bejelentkezés
            </Button>
            <Alert
              className="mt-3"
              color="danger"
              isOpen={!loginstate && loginmsg !== null && this.state.submitted}
            >
              Az email cím vagy jelszó nem megfelelő!
            </Alert>
            <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
              <Link to="/registration" className="text-white no-link">
                Regisztráció
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    fromStore,
    toStore
  )(Login)
);
