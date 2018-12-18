import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Notfound from './Notfound';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
