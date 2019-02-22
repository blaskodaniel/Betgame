import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainMenu from '../MainMenu/MainMenu';
import Login from '../Login/Login';
import About from '../About/About';
import Home from '../Home/Home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container-fluid">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <MainMenu />
            </header>
          </div>
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
