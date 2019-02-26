import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Route } from 'react-router-dom';
import MainMenu from '../MainMenu/MainMenu';
import Login from '../Login/Login';
import About from '../About/About';
import Home from '../Home/Home';

class App extends Component {

  render() {
    const divStyle = {
      height: '500px'
    };

    return (
        <div className="App">
          <div className="container-fluid p-0">
            <header className="App-header">
              <MainMenu />
            </header>
          </div>
          <div className="container-fluid" style={divStyle}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
    );
  }
}

export default App;
