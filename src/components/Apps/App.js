import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from '../SignUp';
import Login from '../Login';

class App extends Component {

  render() {
    return (
      <Router>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;