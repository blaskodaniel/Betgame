import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Route, Switch } from 'react-router-dom';
import MainMenu from '../MainMenu/MainMenu';
import Login from '../Login/Login';
import About from '../About/About';
import Home from '../Home/Home';
import Registration from '../Registration/Registration';
import Notfound from '../404/404';

// Amit kapunk a store-ból
const mapStateToProps = (state, match) => {
  console.log("AppComponent: " + JSON.stringify(state))
  return {
    loginstate: state.Login.authentication
  }
}

class App extends Component {

  render() {
    const divStyle = {
      height: '500px'
    };
    if (!this.props.loginstate) {
      console.log("Átirányítás a Login oldalra");
      return (
        <div className="container-fluid" style={divStyle}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route component={Notfound} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="App">
          <div className="container-fluid p-0">
            <header className="App-header">
              <MainMenu />
            </header>
          </div>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps)(App));
