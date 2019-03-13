import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as AuthActions from '../../store/actions/authentication';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registration.css';

// Amit beküldünk a store-ba
const mapDispatchToProps = (dispatch) => {
    return {
        registration: (email,password,name) => dispatch(AuthActions.Registration(email,password,name))
    }
}

// Amit kapunk a store-ból
const mapStateToProps = (state, match) => {
    console.log("RegistrationComponent: " + JSON.stringify(state))
    return {
        loginstate: state.Login.authentication
    }
}

class Registration extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.registration(this.state.email,this.state.password,this.state.name);
    }

    render() {
        if (this.props.loginstate) {
            console.log("BE VAGYOK LÉPVE!");
            return null;
        }
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <div className="registrationcontainer fadeIn animated">
                    <div className="logo mb-3">
                        <div className="col-md-12 text-center text-white">
                            <h4>Regisztráció</h4>
                        </div>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name" hidden>Name</Label>
                            <Input type="text" name="name" autoComplete="off" id="name" placeholder="Név" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" hidden>Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Jelszó" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" hidden>Email</Label>
                            <Input type="email" name="email" autoComplete="off" id="email" placeholder="Email cím" onChange={this.handleChange} />
                        </FormGroup>
                        <Button className="w-100" color="success">Regisztrálok</Button>
                        <div className="mt-3 d-flex flex-column justify-content-end align-items-end">
                            <Link to="/login" className="text-white no-link">Bejelentkezés >></Link>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));