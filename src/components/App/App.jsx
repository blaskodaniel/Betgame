import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminLayout from "../Admin/Admin";
import MainMenu from '../MainMenu/MainMenu';
import Login from '../Login/Login';
import About from '../About/About';
import Home from '../Home/Home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container-fluid p-0">
            <header className="App-header">
              <MainMenu />
            </header>
          </div>
          <div className="container-fluid">
            <Switch>
              <Route path="/admin" render={props => <AdminLayout {...props} />} />
            </Switch>
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